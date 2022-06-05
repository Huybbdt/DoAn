import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpParams } from '@angular/common/http';
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
  textBtn:any = '';
  message:any = '';
  taikhoan:any;
  constructor(
    private serviceHttp: ServiceHttpService,
    private modalService: NgbModal,

  ) {}

  ngOnInit(): void {
   window.alert = function() {};
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
    };
    this.serviceHttp.getAllNhanVien().subscribe((data) => {
      this.nhanvien = data.data;
      this.dtTrigger.next(this.dtOptions);
    });
  }
  deleteNhanVien(nhanvienID: any,modal:any) {
    this.serviceHttp.deleteNhanVien(nhanvienID).subscribe((data) => {
      if(data.message == 'success') {
        this.serviceHttp.getAllTaiKHoan().subscribe((data) => {
          this.taikhoan = data.data;
          this.taikhoan.forEach((item:any)=> {
            if(item.NhanVienID == nhanvienID) {
              console.log(item);
              this.serviceHttp.deleteTaiKHoan(item._id).subscribe((data) => {
                console.log(data);
              });
            }
          })
        });

        this.open(modal,{textBtn: 'OKE', message: 'Bạn đã xóa thành công'},data.data);
      } else {
        this.open(modal,{textBtn: 'OKE', message: 'Bạn Đã xóa không thành Công'},data.data);
      }
    });
    this.serviceHttp.getAllNhanVien().subscribe((data) => {
      this.nhanvien = data.data;
      this.dtTrigger.next(this.dtOptions);
    });
  }
  open(modal:any,content:any,data: any) {
    this.textBtn = content.textBtn;
    this.message = content.message + ' ' + data.HoTen;
    this.modalService.open(modal);
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
