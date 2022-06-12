import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';

@Component({
  selector: 'app-thietbi-form',
  templateUrl: './thietbi-form.component.html',
  styleUrls: ['./thietbi-form.component.scss']
})
export class ThietbiFormComponent implements OnInit {
  params: any;
  thietbiForm: FormGroup;
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
    createThietBiForm(data?: any):void {
    this.thietbiForm = this.formBuilder.group({
      PhongID:[ data? data.PhongID : '', [Validators.required]],
      TenThietBi:[ data? data.TenThietBi : ''],
      SoLuong:[ data? data.SoLuong : '', [Validators.required]],
      MoTa:[ data? data.MoTa : '', [Validators.required]],
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
        this.createThietBiForm();
    }else {
      this.serviceHttp.getThietBi(this.params['id']).subscribe((data) => {
        console.log(data);

        if(this.params['active'] === 'details') {
          this.listPhong.forEach((item:any) => {
             if(data.data.PhongID == item._id) {
              this.serviceHttp.getPhong(data.data.PhongID).subscribe((itemPhong:any) => {
                this.formData = {...data.data,PhongID: itemPhong.data.TenPhong};
                this.createThietBiForm(this.formData);
              });
            }
          });
        }else {
          this.formData = data.data;
          this.createThietBiForm(this.formData);
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
    this.thietbiForm.patchValue({
      PhongID: this.selectedPhong
    })
    if(this.params['active'] === 'create') {
      this.serviceHttp.createThietBi(this.thietbiForm.value).subscribe((data:any) => {
        if(data.message == 'success') {
          this.open(content);
          this.router.navigate(['/admin/thietbi']);
        }
      });
    }
    if(this.params['active'] === 'edit') {
      this.serviceHttp.updateThietBi(this.thietbiForm.value,this.params['id']).subscribe((data) => {
        if(data.message == 'success') {
          this.modalService.open(content);
          this.router.navigate(['/admin/thietbi']);
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
