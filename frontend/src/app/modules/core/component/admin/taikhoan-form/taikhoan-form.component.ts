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
  textBtn:any;
  message:any;
  isSave: boolean = false;
  textSubmit : string;
  isDisabledEdit:boolean = false;
  taikhoan:any;
  taiKhoanNhanvien: any;
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
          if(item.NhanVienID == '629ae59a3a4939caae7f15cd') {
            this.taiKhoanNhanvien = item;
            console.log(this.taiKhoanNhanvien);
            this.textSubmit = 'Cập Nhật tài khoản'
            this.createNhanVienForm(this.taiKhoanNhanvien)

          }else {
            this.textSubmit = 'Tạo tài khoản';
            this.isSave = true;
            this.createNhanVienForm()
          }
        })
      });

    }
    isPassword() {
      this.isHien = !this.isHien;
    }
    onSubmitForm(content?:any) {
      if(!this.taiKhoanNhanvien) {
        this.textSubmit = 'Tạo tài khoản'
        this.serviceHttp.createTaiKHoan(this.taiKhoanForm.value).subscribe((data) => {
          if(data.message == 'success') {
            this.open(content);
            // this.phongForm.reset();
          }
        })
      }
      if(this.taiKhoanNhanvien) {
        this.serviceHttp.updateTaiKHoan(this.taiKhoanForm.value,this.taiKhoanNhanvien._id).subscribe((data) => {
          if(data.message == 'success') {
            this.textBtn = 'OKE';
            this.message = 'Bạn  cập nhật thành công';
            this.modalService.open(content);
            // this.phongForm.reset();
          }
        })
      }
    }

    open(modal:any) {
      if(this.params['active'] === 'edit') {
        this.textBtn = 'Cập nhật';
        this.message = 'Bạn chắn chắn muốn cập nhật';
      }
      if (this.params['active'] === 'create') {
        this.textBtn = 'OKE';
        this.message = 'Bạn đã tạo phòng thành công';
      }
      this.modalService.open(modal);
    }

}
