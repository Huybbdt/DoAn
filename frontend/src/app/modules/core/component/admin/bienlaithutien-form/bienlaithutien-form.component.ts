import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';

@Component({
  selector: 'app-bienlaithutien-form',
  templateUrl: './bienlaithutien-form.component.html',
  styleUrls: ['./bienlaithutien-form.component.scss']
})
export class BienlaithutienFormComponent implements OnInit {
  params: any;
  bienlaithutienForm: FormGroup;
  formData: any;
  thongbao: any;
  nhanvien:any;
  listSinhVien: any;
  listNhanVien: any;
  selectedSinhVien:any;
  isDisabledEdit: boolean = false;
  textSubmit : string;
  constructor( private formBuilder: FormBuilder,  private serviceHttp: ServiceHttpService,
    private activatedRoute: ActivatedRoute,  private modalService: NgbModal,private router: Router) { }
    createBienLaiThuTienForm(data?: any):void {
    this.bienlaithutienForm = this.formBuilder.group({
      NhanVienID:[ data? data.NhanVienID : '', [Validators.required]],
      SinhVienID:[ data? data.SinhVienID : '', [Validators.required]],
      HocKy:[ data? data.HocKy : '', [Validators.required]],
      NamHoc:[ data? data.NamHoc : '', [Validators.required]],
      TongTien: [data? data.TongTien : '', [Validators.required]],
      NgayLap:[data? data.NgayLap : '', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.params = params;
    });
    this.serviceHttp.getAllSinhVien().subscribe((data:any) => {
      this.listSinhVien = data.data;
      this.selectedSinhVien = this.listSinhVien[0]['_id'];
    });
    this.serviceHttp.getAllNhanVien().subscribe((data:any) => {
      this.listNhanVien = data.data;
    });
    if (this.params['active'] === 'create') {
        this.createBienLaiThuTienForm();
    }else {
      this.serviceHttp.getBienLaiThuTien(this.params['id']).subscribe((data) => {
        this.formData = {...data.data, NgayLap: this.formatDate(data.data.NgayLap)};
        this.createBienLaiThuTienForm(this.formData);
      });
      if(this.params['active'] === 'details') {
        this.isDisabledEdit = true;
      }
    }
  }

  onSubmitForm(content?:any) {
    this.nhanvien = localStorage.getItem('nhanvien');
    this.nhanvien =  JSON.parse(this.nhanvien);
    this.bienlaithutienForm.patchValue({
      NhanVienID: this.nhanvien.data._id,
      NgayLap: new Date(),
      SinhVienID: this.selectedSinhVien
    })
    if(this.params['active'] === 'create') {
      this.serviceHttp.createBienLaiThuTien(this.bienlaithutienForm.value).subscribe((data:any) => {
        if(data.message == 'success') {
          this.open(content);
          this.router.navigate(['/admin/bienlaithutien']);
        }
      });
    }
    if(this.params['active'] === 'edit') {
      this.serviceHttp.updateBienLaiThuTien(this.bienlaithutienForm.value,this.params['id']).subscribe((data) => {
        if(data.message == 'success') {
          this.modalService.open(content);
          this.router.navigate(['/admin/bienlaithutien']);
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
