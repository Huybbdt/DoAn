import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';

@Component({
  selector: 'app-taikhoan-form',
  templateUrl: './taikhoan-form.component.html',
  styleUrls: ['./taikhoan-form.component.scss']
})
export class TaikhoanFormComponent implements OnInit {
  params: any;
  taiKhoanForm: FormGroup;
  isSave: boolean = false;
  isDisabledEdit:boolean = false;
  taikhoan:any;
  taiKhoanNhanvien: any;
  isUpdate:boolean = false;
  isHien:boolean = false;
  constructor( private formBuilder: FormBuilder,  private serviceHttp: ServiceHttpService,
    private activatedRoute: ActivatedRoute,private modalService: NgbModal) { }

    createNhanVienForm(data?: any):void {
      this.taiKhoanForm = this.formBuilder.group({
        NhanVienID:[ data? data.MatKhau : this.params, [Validators.required]],
        Email:[ data? data.Email : '', [Validators.required]],
        MatKhau:[ data? data.MatKhau : '', [Validators.required]],
      });
    }
    ngOnInit(): void {
      this.activatedRoute.params.subscribe((params) => {
        this.params = params;
      });
      this.serviceHttp.getAllTaiKHoan().subscribe((data) => {
        this.taikhoan = data.data;
        this.taikhoan.forEach((item:any)=> {
          if(item.NhanVienID == this.params.id) {
            this.taiKhoanNhanvien = item;
            this.createNhanVienForm(this.taiKhoanNhanvien);
            this.isUpdate = true;
          }
        });
        if(!this.isUpdate) {
          this.createNhanVienForm();
          this.isSave = true;
        }
      });

    }
    isPassword() {
      this.isHien = !this.isHien;
    }

    onSubmitForm(content:any) {
      if(this.isSave) {
        this.serviceHttp.createTaiKHoan({...this.taiKhoanForm.value,NhanVienID: this.params.id}).subscribe((data) => {
          if(data.message == 'success') {
            this.open(content);
          }
        });
      }
      if(!this.isSave) {
        this.serviceHttp.updateTaiKHoan({...this.taiKhoanForm.value,NhanVienID: this.params.id},this.taiKhoanNhanvien._id).subscribe((data) => {
          if(data.message == 'success') {
            this.modalService.open(content);
          }
        });
      }
    }
    open(modal:any) {
      this.modalService.open(modal);
    }
}
