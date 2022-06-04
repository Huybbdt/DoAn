import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';

@Component({
  selector: 'app-sinhvien-form',
  templateUrl: './sinhvien-form.component.html',
  styleUrls: ['./sinhvien-form.component.scss']
})
export class SinhvienFormComponent implements OnInit {
  params: any;
  sinhVienForm: FormGroup;
  formData: any;
  textBtn:any;
  message:any;
  isDisabledEdit: boolean = false;
  textSubmit : string;
  phongTrong: any = [];
  selectedPhong:any;
  constructor( private formBuilder: FormBuilder,  private serviceHttp: ServiceHttpService,
    private activatedRoute: ActivatedRoute,private modalService: NgbModal) { }


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
  ngOnInit(): void {
    this.getPhong();
    this.activatedRoute.params.subscribe((params) => {
      this.params = params;
    });

    if (this.params['active'] === 'create') {
        this.createSinhVienForm();
        this.textSubmit = 'Tạo mới'
    }else {
      this.serviceHttp.getSinhVien(this.params['id']).subscribe((data) => {
        this.formData = {...data.data, NgaySinh:this.formatDate(data.data.NgaySinh)} ;
        this.createSinhVienForm(this.formData);
      });
      if(this.params['active'] === 'details') {
        this.isDisabledEdit = true
      } else {
        this.textSubmit = 'Cập nhật'
      }
    }
  }
  getPhong() {
    this.serviceHttp.getPhongTrong().subscribe((data) => {
      this.phongTrong = data.data;
      this.selectedPhong = this.phongTrong[0].TenPhong
    });
  }
  onChange(eventData: any){
    this.sinhVienForm.patchValue({
      PhongID: eventData._id
    })
    console.log("CHANGE EVENT DATA:", eventData._id);
  }
  onSubmitForm(content?:any) {
    if(this.params['active'] === 'create') {
      this.serviceHttp.createSinhVien(this.sinhVienForm.value).subscribe((data) => {
        if(data.message == 'success') {
          this.open(content);
          // this.phongForm.reset();
          this.getPhong();
        }
      })
    }
    if(this.params['active'] === 'edit') {
      this.serviceHttp.updateSinhVien(this.sinhVienForm.value,this.params['id']).subscribe((data) => {
        if(data.message == 'success') {
          this.textBtn = 'OKE';
          this.message = 'Bạn  cập nhật thành công';
          this.modalService.open(content);
          // this.phongForm.reset();
          this.getPhong();
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
