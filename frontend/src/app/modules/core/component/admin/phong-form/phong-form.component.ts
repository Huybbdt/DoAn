import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { phong_validation } from './validate-phong';
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
  isSubmited:any;
  phong_validation_messages = phong_validation;
  constructor( private formBuilder: FormBuilder,  private serviceHttp: ServiceHttpService,
    private activatedRoute: ActivatedRoute,  private modalService: NgbModal,private router: Router) { }


  createPhongForm(data?: any):void {
    this.phongForm = this.formBuilder.group({
      KhuID:[ data? data.KhuID : '629b35197a11b1ab6fcfb604', [Validators.required]],
      TenPhong:[ data? data.TenPhong : '', [Validators.required]],
      SoLuongChua: [data? data.SoLuongChua : 8, [Validators.required]],
      SoLuongDangO:[data? data.SoLuongDangO : 0, [Validators.required]],
      TinhTrang: [ data? data.TinhTrang : 'Trống', [Validators.required]],
    });
    this.phongForm.valueChanges.subscribe(form => {
      if(form.SoLuongChua > form.SoLuongDangO) {
        this.phongForm.patchValue({TinhTrang:'Trống'});
      } else {
        this.phongForm.patchValue({TinhTrang:'Đầy'});

      }
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

  oncheck(modal:any) {
    if(this.phongForm.valid) {
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
  open(modal:any) {
    this.modalService.open(modal);
  }

}
