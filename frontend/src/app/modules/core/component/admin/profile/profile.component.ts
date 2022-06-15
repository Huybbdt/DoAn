import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';
import { nhanvien_validation } from '../nhanvien-form/validate-nhanvien';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  params: any;
  nhanVienForm: FormGroup;
  formData: any;
  textBtn:any;
  message:any;
  isDisabledEdit: boolean = false;
  textSubmit : string;
  isSubmited:any;
  nhanvien:any;
  nhanvien_validation_messages = nhanvien_validation;
  constructor( private formBuilder: FormBuilder,  private serviceHttp: ServiceHttpService,
    private activatedRoute: ActivatedRoute,private modalService: NgbModal,private router: Router) { }


  ngOnInit(): void {
    this.nhanvien = localStorage.getItem('nhanvien');
    this.nhanvien =  JSON.parse(this.nhanvien);
    this.createNhanVienForm( this.nhanvien.data);
  }


  createNhanVienForm(data?: any):void {
    this.nhanVienForm = this.formBuilder.group({
      HoTen:[ data? data.HoTen : '', [Validators.required]],
      GioiTinh:[ data? data.GioiTinh : true, [Validators.required]],
      NgaySinh: [data? this.formatDate(data.NgaySinh) : '', [Validators.required]],
      SDT:[data? data.SDT : '', [Validators.required]],
      CMND: [ data? data.CMND : '', [Validators.required]],
      NoiCap: [ data? data.NoiCap : '', [Validators.required]],
      DanToc:[ data? data.DanToc : '', [Validators.required]],
      TonGiao: [ data? data.TonGiao : '', [Validators.required]],
      DiaChi: [ data? data.DiaChi : '', [Validators.required]],
      ChucVu: [ data? data.ChucVu : '', [Validators.required]],
    });
  }

  onSubmitForm(content?:any) {
      this.serviceHttp.updateNhanVien(this.nhanVienForm.value,this.nhanvien.data._id).subscribe((data) => {
        if(data.message == 'success') {
          this.serviceHttp.getNhanVien(this.nhanvien.data._id).subscribe(data => {
            localStorage.removeItem('nhanvien');
            localStorage.setItem('nhanvien',JSON.stringify(data));
          });
          this.modalService.open(content);
          this.router.navigate(['/admin']);
        }
      })
  }

  oncheck(modal:any) {
    if(this.nhanVienForm.valid) {
      this.open(modal);
    } else {
      this.isSubmited = true;
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
