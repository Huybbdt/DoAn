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
  public phongTrong: any = [];
  selectedPhong:any;
  phong:any;
  phongAll: any;
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
    this.serviceHttp.getPhongTrong().subscribe((data) => {
      this.phongTrong = data.data;
      this.sinhVienForm.patchValue({ PhongID :  this.phongTrong[0]._id});
    });
    this.activatedRoute.params.subscribe((params) => {
      this.params = params;
    });

    if (this.params['active'] === 'create') {
        this.createSinhVienForm();
        this.textSubmit = 'Tạo mới';
    }else {
      this.serviceHttp.getSinhVien(this.params['id']).subscribe((data) => {
        this.formData = {...data.data, NgaySinh:this.formatDate(data.data.NgaySinh)} ;
        this.createSinhVienForm(this.formData);
      });
      if(this.params['active'] === 'details') {
        this.isDisabledEdit = true;
        this.getAllPhong();
      } else {
        this.textSubmit = 'Cập nhật'
      }
    }
  }
  getPhong() {
    this.serviceHttp.getPhongTrong().subscribe((data) => {
      this.phongTrong = data.data;
    });
  }

  onSubmitForm(content?:any) {
    if(this.params['active'] === 'create') {
      this.serviceHttp.createSinhVien(this.sinhVienForm.value).subscribe((data) => {
        if(data.message == 'success') {
          this.open(content);
          // this.phongForm.reset();
          this.updatePhong(null,this.sinhVienForm.value.PhongID,'create');
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
          this.updatePhong(this.formData.PhongID,this.sinhVienForm.value.PhongID,'edit');
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


  getAllPhong() {
    this.serviceHttp.getPhong(this.sinhVienForm.value['PhongID']).subscribe((data) => {
      this.phongAll = data.data.TenPhong;
    });
  }
  updatePhong(PhongIDCu:any,PhongIDMoi:any,active:string) {
    if(active == 'edit'){
      this.serviceHttp.getPhong(PhongIDCu).subscribe((data) => {
        this.phong = data.data;
        this.phong.SoLuongDangO = this.phong.SoLuongDangO - 1;
        this.serviceHttp.updatePhong(this.phong,this.phong._id).subscribe((data) => {
          console.log(data);
        });
      });
    }
    this.serviceHttp.getPhong(PhongIDMoi).subscribe((data) => {
      this.phong = data.data;
      this.phong.SoLuongDangO = this.phong.SoLuongDangO + 1;
      this.serviceHttp.updatePhong(this.phong,this.phong._id).subscribe((data) => {
        console.log(data);
      });
    });
  }
}
