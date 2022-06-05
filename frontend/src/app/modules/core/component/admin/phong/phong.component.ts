import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';

@Component({
  selector: 'app-khu',
  templateUrl: './phong.component.html',
  styleUrls: ['./phong.component.scss']
})
export class PhongComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  phong: any = [];
  textBtn:any = '';
  message:any = '';
  khu:any;
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
    this.serviceHttp.getAllKhu().subscribe((data) => {
      this.khu = data.data;
    });
    this.serviceHttp.getAllPhong().subscribe((data) => {
      this.phong = data.data;
      this.dtTrigger.next(this.dtOptions);
    });
  }
  deletePhong(phongID: any,modal:any) {
    this.serviceHttp.deletePhong(phongID).subscribe((data) => {
      if(data.message == 'success') {
        this.open(modal,{textBtn: 'OKE', message: 'Bạn đã xóa thành công'},data.data);
      } else {
        this.open(modal,{textBtn: 'OKE', message: 'Bạn Đã xóa không thành Công'},data.data);
      }
    });
    this.serviceHttp.getAllPhong().subscribe((data) => {
      this.phong = data.data;
      this.dtTrigger.next(this.dtOptions);
    });
  }
  coverIDKhuToName(id:any) {
    let result;
    this.khu.forEach((item:any) => {
      if(item._id == id) {
        result = item.TenKhu;
      }
    });
    return result;
  }
  open(modal:any,content:any,data: any) {
    this.textBtn = content.textBtn;
    this.message = content.message + ' ' + data.TenPhong;
    this.modalService.open(modal);
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
