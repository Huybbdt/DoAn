import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';

@Component({
  selector: 'app-hoadondiennuoc-form',
  templateUrl: './hoadondiennuoc-form.component.html',
  styleUrls: ['./hoadondiennuoc-form.component.scss']
})
export class HoadondiennuocFormComponent implements OnInit {
  params: any;
  hoadondiennuocForm: FormGroup;
  formData: any;
  valueTien: any;
  nhanvien:any;
  listPhong: any;
  listNhanVien: any;
  selectedPhong:any;
  isDisabledEdit: boolean = false;
  textSubmit : string;
  constructor( private formBuilder: FormBuilder,  private serviceHttp: ServiceHttpService,
    private activatedRoute: ActivatedRoute,  private modalService: NgbModal,private router: Router) { }
    createHoaDonDienNuocForm(data?: any):void {
    this.hoadondiennuocForm = this.formBuilder.group({
      NhanVienID:[ data? data.NhanVienID : '', [Validators.required]],
      PhongID:[ data? data.PhongID : '', [Validators.required]],
      HoTenNguoiNop:[ data? data.HoTenNguoiNop : ''],
      ChiSoDienDauKy:[ data? data.ChiSoDienDauKy : '', [Validators.required]],
      ChiSoDienCuoiKy:[ data? data.ChiSoDienCuoiKy : '', [Validators.required]],
      DonGiaDien:[ data? data.DonGiaDien : 3500, [Validators.required]],
      ChiSoNuocDauKy:[ data? data.ChiSoNuocDauKy : '', [Validators.required]],
      ChiSoNuocCuoiKy:[ data? data.ChiSoNuocCuoiKy : '', [Validators.required]],
      DonGiaNuoc:[ data? data.DonGiaNuoc : 7000, [Validators.required]],
      TongTien: [data? data.TongTien : '', [Validators.required]],
      NgayLap:[data? data.NgayLap : ''],
    });
    this.hoadondiennuocForm.valueChanges.subscribe((data:any) => {
      this.valueTien = (data.ChiSoNuocCuoiKy - data.ChiSoNuocDauKy) * data.DonGiaNuoc +  (data.ChiSoDienCuoiKy - data.ChiSoDienDauKy) * data.DonGiaDien;
      console.log(this.valueTien);
      this.hoadondiennuocForm.patchValue({TongTien: this.valueTien});

    });
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.params = params;
    });
    this.serviceHttp.getAllPhong().subscribe((data:any) => {
      this.listPhong = data.data;
      this.selectedPhong = this.listPhong[0]['_id'];
    });
    if (this.params['active'] === 'create') {
        this.createHoaDonDienNuocForm();
    }else {
      this.serviceHttp.getHoaDonDienNuoc(this.params['id']).subscribe((data) => {
        if(this.params['active'] === 'details') {
          this.listPhong.forEach((item:any) => {
             if(data.data.PhongID == item._id) {
              this.serviceHttp.getNhanVien(data.data.NhanVienID).subscribe((itemNhanVien:any) => {
                console.log(itemNhanVien);
                this.formData = {...data.data, NgayLap: this.formatDate(data.data.NgayLap),PhongID:item.TenPhong,NhanVienID:itemNhanVien.data.HoTen};
                this.createHoaDonDienNuocForm(this.formData);
              });
            }
          });
        }else {
          this.formData = {...data.data, NgayLap: this.formatDate(data.data.NgayLap)};
          this.createHoaDonDienNuocForm(this.formData);
        }
      });
      if(this.params['active'] === 'details') {
        this.isDisabledEdit = true;
      }
    }
  }

  onSubmitForm(content?:any) {
    this.nhanvien = localStorage.getItem('nhanvien');
    this.nhanvien =  JSON.parse(this.nhanvien);
    this.hoadondiennuocForm.patchValue({
      NhanVienID: this.nhanvien.data._id,
      NgayLap: new Date(),
      PhongID: this.selectedPhong
    })
    if(this.params['active'] === 'create') {
      console.log(this.hoadondiennuocForm.value);
      this.serviceHttp.createHoaDonDienNuoc(this.hoadondiennuocForm.value).subscribe((data:any) => {
        if(data.message == 'success') {
          this.open(content);
          this.router.navigate(['/admin/hoadondiennuoc']);
        }
      });
    }
    if(this.params['active'] === 'edit') {
      this.serviceHttp.updateHoaDonDienNuoc(this.hoadondiennuocForm.value,this.params['id']).subscribe((data) => {
        if(data.message == 'success') {
          this.modalService.open(content);
          this.router.navigate(['/admin/hoadondiennuoc']);
        }
      })
    }
  }

  open(modal:any) {
    this.modalService.open(modal);
  }

  formatDate(date:string) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    return [year, month, day].join('-') + ' ' + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  }

}
