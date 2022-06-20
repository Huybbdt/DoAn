import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';

@Component({
  selector: 'app-thongbao-form',
  templateUrl: './thongbao-form.component.html',
  styleUrls: ['./thongbao-form.component.scss']
})
export class ThongbaoFormComponent implements OnInit {
  message: any;
  textBtn:any;
  params: any;
  thongbaoForm: FormGroup;
  formData: any;
  thongbao: any;
  nhanvien:any;
  isDisabledEdit: boolean = false;
  textSubmit : string;
  selectedFiles:any;
  submited: boolean = false;
  url: any;
  constructor( private formBuilder: FormBuilder,  private serviceHttp: ServiceHttpService,
    private activatedRoute: ActivatedRoute,  private modalService: NgbModal,private router: Router) { }
  createThongBaoForm(data?: any):void {
    this.thongbaoForm = this.formBuilder.group({
      NhanVienID:[ data? data.NhanVienID : '', [Validators.required]],
      TieuDe:[ data? data.TieuDe : '', [Validators.required]],
      NoiDung:[ data? data.NoiDung : '', [Validators.required]],
      Anh: [data? data.Anh : '', [Validators.required]],
      NgayLap:[data? data.NgayLap : '', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.params = params;
    });
    if (this.params['active'] === 'create') {
        this.createThongBaoForm();
    }else {
      this.serviceHttp.getThongBao(this.params['id']).subscribe((data) => {
        this.formData = {...data.data, NgayLap: this.formatDate(data.data.NgayLap)}; ;
        this.createThongBaoForm(this.formData);
      });
      if(this.params['active'] === 'details') {
        this.isDisabledEdit = true;
      }
    }
  }

  onSubmitForm(content?:any) {
    if(this.submited) {
      return;
    }
    this.submited = true;
    const formData = new FormData();
    if(this.params['active'] === 'create') {
      this.nhanvien = localStorage.getItem('nhanvien');
      this.nhanvien =  JSON.parse(this.nhanvien);
      this.thongbaoForm.patchValue({
        NhanVienID: this.nhanvien.data._id,
        NgayLap: new Date()
      });
      console.log( this.thongbaoForm.value['Anh']);
      formData.append('NhanVienID', this.thongbaoForm.value['NhanVienID']);
      formData.append('TieuDe', this.thongbaoForm.value['TieuDe']);
      formData.append('NoiDung', this.thongbaoForm.value['NoiDung']);
      formData.append('Anh', this.thongbaoForm.value['Anh']);
      formData.append('NgayLap', this.thongbaoForm.value['NgayLap']);
      this.serviceHttp.createThongBao(formData).subscribe((data:any) => {
        if(data.message == 'success') {
          this.open(content);
          this.router.navigate(['/admin/thongbao']);
        }
      });
    }
    if(this.params['active'] === 'edit') {
      console.log( this.thongbaoForm.value['Anh']);
      formData.append('NhanVienID', this.thongbaoForm.value['NhanVienID']);
      formData.append('TieuDe', this.thongbaoForm.value['TieuDe']);
      formData.append('NoiDung', this.thongbaoForm.value['NoiDung']);
      formData.append('Anh', this.thongbaoForm.value['Anh']);
      formData.append('NgayLap', this.thongbaoForm.value['NgayLap']);
      this.serviceHttp.updateThongBao(formData,this.params['id']).subscribe((data) => {
        if(data.message == 'success') {
          this.modalService.open(content);
          this.router.navigate(['/admin/thongbao']);
        }
      })
    }
  }
  fileChangeEvent(event: any) {
    const file = event.target.files[0];
    this.thongbaoForm.patchValue({
      Anh: file,
    });
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event:any) => {
      this.url = event.target.result;
    }
    this.thongbaoForm.value['Anh']?.updateValueAndValidity();
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
