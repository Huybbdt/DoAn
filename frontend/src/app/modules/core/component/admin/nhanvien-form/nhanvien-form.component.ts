import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';

@Component({
  selector: 'app-nhanvien-form',
  templateUrl: './nhanvien-form.component.html',
  styleUrls: ['./nhanvien-form.component.scss']
})
export class NhanvienFormComponent implements OnInit {
  params: any;
  nhanVienForm: FormGroup;
  formData: any;
  textBtn:any;
  message:any;
  isDisabledEdit: boolean = false;
  textSubmit : string;
  constructor( private formBuilder: FormBuilder,  private serviceHttp: ServiceHttpService,
    private activatedRoute: ActivatedRoute,private modalService: NgbModal) { }


  createNhanVienForm(data?: any):void {
    this.nhanVienForm = this.formBuilder.group({
      HoTen:[ data? data.HoTen : '', [Validators.required]],
      GioiTinh:[ data? data.GioiTinh : true, [Validators.required]],
      NgaySinh: [data? data.NgaySinh : '', [Validators.required]],
      SDT:[data? data.SDT : '', [Validators.required]],
      CMND: [ data? data.CMND : '', [Validators.required]],
      NoiCap: [ data? data.NoiCap : '', [Validators.required]],
      DanToc:[ data? data.DanToc : '', [Validators.required]],
      TonGiao: [ data? data.TonGiao : '', [Validators.required]],
      DiaChi: [ data? data.DiaChi : '', [Validators.required]],
      ChucVu: [ data? data.ChucVu : '', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.params = params;
    });
    if (this.params['active'] === 'create') {
        this.createNhanVienForm();
        this.textSubmit = 'Tạo mới'
    }else {
      this.serviceHttp.getNhanVien(this.params['id']).subscribe((data) => {
        this.formData = {...data.data, NgaySinh:this.formatDate(data.data.NgaySinh)} ;
        this.createNhanVienForm(this.formData);
      });
      if(this.params['active'] === 'details') {
        this.isDisabledEdit = true
      } else {
        this.textSubmit = 'Cập nhật'
      }
    }
  }

  onSubmitForm(content?:any) {
    if(this.params['active'] === 'create') {
      this.serviceHttp.createNhanVien(this.nhanVienForm.value).subscribe((data) => {
        if(data.message == 'success') {
          this.open(content);
          // this.phongForm.reset();
        }
      })
    }
    if(this.params['active'] === 'edit') {
      this.serviceHttp.updateNhanVien(this.nhanVienForm.value,this.params['id']).subscribe((data) => {
        if(data.message == 'success') {
          this.textBtn = 'OKE';
          this.message = 'Bạn  cập nhật thành công';
          this.modalService.open(content);
          // this.phongForm.reset();
        }
      })
    }
  }

  formatDate(date:string): string {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    return [year, month, day].join('-');
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
