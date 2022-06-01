import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare const $: any;
@Component({
  selector: 'app-nhanvien',
  templateUrl: './nhanvien.component.html',
  styleUrls: ['./nhanvien.component.scss'],
})
export class NhanvienComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  nhanvien: any = [];
  nhanVienForm: FormGroup;
  constructor(
    private serviceHttp: ServiceHttpService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {}

  open(content: any, id: any, action: any) {
    this.modalService.open(content);
  }

  createNhanVienForm(): void {
    this.nhanVienForm = this.formBuilder.group({
      hoTen:['', [Validators.required]],
      ngaySinh:['', [Validators.required]],
      diaChi: ['', [Validators.required]],
      chucVu:['', [Validators.required]],
      gioiTinh: ['', [Validators.required]],
      sdt: ['', [Validators.required]],
      cmnd:['', [Validators.required]],
      email: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
    };
    this.serviceHttp.getAllNhanVien().subscribe((data) => {
      this.nhanvien = data.data;
      this.dtTrigger.next(data.data);
    });
  }
  onSubmitForm() {}
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
