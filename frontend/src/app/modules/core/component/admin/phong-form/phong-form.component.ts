import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-phong-form',
  templateUrl: './phong-form.component.html',
  styleUrls: ['./phong-form.component.scss']
})
export class PhongFormComponent implements OnInit {
  message: any;
  textBtn:any;
  params: any;
  phongForm: FormGroup;
  formData: any;
  khu: any;
  isDisabledEdit: boolean = false;
  textSubmit : string;
  constructor( private formBuilder: FormBuilder,  private serviceHttp: ServiceHttpService,
    private activatedRoute: ActivatedRoute,  private modalService: NgbModal,private router: Router) { }


  createPhongForm(data?: any):void {
    this.phongForm = this.formBuilder.group({
      KhuID:[ data? data.KhuID : '629b35197a11b1ab6fcfb604', [Validators.required]],
      TenPhong:[ data? data.TenPhong : '', [Validators.required]],
      SoLuongChua: [data? data.SoLuongChua : '', [Validators.required]],
      SoLuongDangO:[data? data.SoLuongDangO : '', [Validators.required]],
      TinhTrang: [ data? data.TinhTrang : '', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.params = params;
    });
    this.serviceHttp.getAllKhu().subscribe((data) => {
      this.khu = data.data;
    });
    if (this.params['active'] === 'create') {
        this.createPhongForm();
    }else {
      this.serviceHttp.getPhong(this.params['id']).subscribe((data) => {
        this.formData = data.data;
        this.createPhongForm(this.formData);
      });
      if(this.params['active'] === 'details') {
        this.isDisabledEdit = true;
      }
    }
  }

  onSubmitForm(content?:any) {
    if(this.params['active'] === 'create') {
      this.serviceHttp.createPhong(this.phongForm.value).subscribe((data) => {
        if(data.message == 'success') {
          this.open(content);
          this.router.navigate(['/admin/phong']);
        }
      })
    }
    if(this.params['active'] === 'edit') {
      this.serviceHttp.updatePhong(this.phongForm.value,this.params['id']).subscribe((data) => {
        if(data.message == 'success') {
          this.modalService.open(content);
          this.router.navigate(['/admin/phong']);
        }
      })
    }
  }

  open(modal:any) {
    this.modalService.open(modal);
  }

}
