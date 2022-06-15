import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  message: any;
  textBtn:any;
  params: any;
  thongbaoForm: FormGroup;
  PasswordForm: FormGroup;
  formData: any;
  foundPassword: any;
  nhanvien:any;
  isDisabledEdit: boolean = false;
  textSubmit : string;
  constructor( private formBuilder: FormBuilder,  private serviceHttp: ServiceHttpService,
    private activatedRoute: ActivatedRoute,  private modalService: NgbModal,private router: Router) { }
  createThongBaoForm(data?: any):void {
    this.thongbaoForm = this.formBuilder.group({
      MatKhau:[ data? data.NhanVienID : '', [Validators.required]],
      Email:[ data? data.Email : '', [Validators.required]],
      NhanVienID:[ data? data.NhanVienID : '', [Validators.required]],
    });
  }
  createPasswordorm():void {
    this.PasswordForm = this.formBuilder.group({
      MatKhauCu:[  '', [Validators.required]],
      MatKhauMoi:[  '', [Validators.required]],
      MatKhauMoiNhapLai:[ '', [Validators.required]],
      id:[ '', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.createPasswordorm();
    this.nhanvien = localStorage.getItem('nhanvien');
    this.nhanvien =  JSON.parse(this.nhanvien);
    this.serviceHttp.getAllTaiKHoan().subscribe(data => {
      const found = data.data.find((item:any) => item.NhanVienID == this.nhanvien.data._id);
      this.PasswordForm.patchValue({id: found._id});
      this.createThongBaoForm(found);
    });



  }

  onSubmitForm(content?:any) {
    this.thongbaoForm.patchValue({MatKhau: this.PasswordForm.value.MatKhauMoi});
    this.serviceHttp.updateTaiKHoan(this.thongbaoForm.value,this.PasswordForm.value.id).subscribe((data) => {
      if(data.message == 'success') {
        this.modalService.open(content);
        this.router.navigate(['/admin']);
      }
    });


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
    return [year, month, day].join('-');
  }

}
