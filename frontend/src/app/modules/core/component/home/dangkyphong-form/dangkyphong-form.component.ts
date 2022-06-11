import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';
import { sinhvien_validation } from './validate-sinhvien';

@Component({
  selector: 'app-dangkyphong-form',
  templateUrl: './dangkyphong-form.component.html',
  styleUrls: ['./dangkyphong-form.component.scss']
})
export class DangkyphongFormComponent implements OnInit {
  sinhvien_validation_messages = sinhvien_validation;
  params: any;
  sinhVienForm: FormGroup;
  formData: any;
  isDisabledEdit: boolean = false;
  public phongTrong: any = [];
  selectedPhong:any;
  phongName:any;
  isSubmited:any;
  constructor( private formBuilder: FormBuilder,  private serviceHttp: ServiceHttpService,
    private activatedRoute: ActivatedRoute,private modalService: NgbModal,private router: Router) { }

  ngOnInit(): void {
    this.serviceHttp.getPhongTrong().subscribe((data) => {
      this.phongTrong = data.data;
    });
    this.createSinhVienForm();
    this.activatedRoute.params.subscribe((params) => {
      this.params = params;
      this.serviceHttp.getPhongTrong().subscribe((data) => {
        this.phongTrong = data.data;
        this.phongTrong.forEach((item:any) => {
          if(item._id == this.params.id) {
            this.phongName = item.TenPhong;
          }
        });
      });
      this.sinhVienForm.patchValue({ PhongID :  this.params.id,TrangThai: 'Đang chờ duyệt'});
    });


  }

  createSinhVienForm(data?: any):void {
    this.sinhVienForm = this.formBuilder.group({
      PhongID: [data? data.PhongID : '', [Validators.required]],
      HoTen:[ data? data.HoTen : '', [Validators.required]],
      GioiTinh:[ data? data.GioiTinh : true, [Validators.required]],
      NgaySinh: [data? data.NgaySinh : '', [Validators.required]],
      SDT:[data? data.SDT : '', [Validators.required]],
      CMND: [ data? data.CMND : '', [Validators.required]],
      NoiCap: [ data? data.NoiCap : '', [Validators.required]],
      DanToc:[ data? data.DanToc : '', [Validators.required]],
      TonGiao: [ data? data.TonGiao : '', [Validators.required]],
      MaSV: [ data? data.MaSV : '', [Validators.required]],
      Lop: [ data? data.Lop : '', [Validators.required]],
      Khoa: [ data? data.Khoa : '', [Validators.required]],
      Truong: [ data? data.Truong : '', [Validators.required]],
      DiaChi: [ data? data.DiaChi : '', [Validators.required]],
      HoTenNguoiThan: [ data? data.HoTenNguoiThan : '', [Validators.required]],
      SDTNguoiThan: [ data? data.SDTNguoiThan : '', [Validators.required]],
      DiaChiNguoiThan: [ data? data.DiaChiNguoiThan : '', [Validators.required]],
      TrangThai: [ data? data.TrangThai : ''],
    });
  }

  oncheck(modal:any) {
    if(this.sinhVienForm.valid) {
      this.open(modal);
    }
    if (this.sinhVienForm.valid) {
    } else {
      this.isSubmited = true;
    }
  }
  onSubmitForm(content?:any) {
    this.serviceHttp.createSinhVien(this.sinhVienForm.value).subscribe((data) => {
      console.log(data);
      if(data.message == 'success') {
        this.open(content);
        this.isSubmited = false;
        this.router.navigate(['/home/dangkyphong']);
      }
    });
  }
  open(modal:any) {
    this.modalService.open(modal);
  }

}
