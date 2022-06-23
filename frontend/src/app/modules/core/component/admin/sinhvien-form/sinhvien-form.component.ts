import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';
import { sinhvien_validation } from './validate-sinhvien';
@Component({
  selector: 'app-sinhvien-form',
  templateUrl: './sinhvien-form.component.html',
  styleUrls: ['./sinhvien-form.component.scss']
})
export class SinhvienFormComponent implements OnInit {
  params: any;
  sinhVienForm: FormGroup;
  formData: any;
  isDisabledEdit: boolean = false;
  public phongTrong: any = [];
  selectedPhong:any;
  isSubmited:any;
  allPhong:any;
  sinhvien_validation_messages = sinhvien_validation;
  constructor( private formBuilder: FormBuilder,  private serviceHttp: ServiceHttpService,
    private activatedRoute: ActivatedRoute,private modalService: NgbModal,private router: Router) { }

  ngOnInit(): void {
    this.serviceHttp.getPhongTrong().subscribe((data) => {
      this.phongTrong = data.data;
      this.sinhVienForm.patchValue({ PhongID :  this.phongTrong[0]._id});
    });
    this.serviceHttp.getAllPhong().subscribe((data) => {
        this.allPhong = data.data;
    })
    this.activatedRoute.params.subscribe((params) => {
      this.params = params;
    });

    if (this.params['active'] === 'create') {
        this.createSinhVienForm();
    }else {
      this.serviceHttp.getSinhVien(this.params['id']).subscribe((data) => {
        this.formData = {...data.data, NgaySinh:this.formatDate(data.data.NgaySinh)} ;
        this.createSinhVienForm(this.formData);
      });
      if(this.params['active'] === 'details') {
        this.isDisabledEdit = true;
      }
    }
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
      TrangThai: [ data? data.TrangThai : 'Đang ở',],
    });
  }

  oncheck(modal:any) {
    if(this.sinhVienForm.valid) {
      if(this.params['active'] === 'create') {
        this.onSubmitForm(modal);
      }
      if(this.params['active'] === 'edit') {
        this.open(modal);
      }
    } else {
      this.isSubmited = true;
    }
  }
  onSubmitForm(content?:any) {
    if(this.params['active'] === 'create') {
      this.serviceHttp.createSinhVien(this.sinhVienForm.value).subscribe((data) => {
        if(data.message == 'success') {
          this.open(content);
          this.router.navigate(['/admin/sinhvien']);
        }
      })
    }
    if(this.params['active'] === 'edit') {
      this.serviceHttp.updateSinhVien(this.sinhVienForm.value,this.params['id']).subscribe((data) => {
        if(data.message == 'success') {
          this.open(content);
          this.router.navigate(['/admin/sinhvien']);
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
    this.modalService.open(modal);
  }

}
