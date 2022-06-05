import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs/internal/Subject';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';

@Component({
  selector: 'app-sinhvien',
  templateUrl: './sinhvien.component.html',
  styleUrls: ['./sinhvien.component.scss'],
})
export class SinhvienComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  sinhvien: any = [];
  textBtn: any = '';
  message: any = '';
  phong: any;
  constructor(
    private serviceHttp: ServiceHttpService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    window.alert = function () {};
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
    };
    this.serviceHttp.getAllSinhVien().subscribe((data) => {
      this.sinhvien = data.data;
      console.log(this.sinhvien);

      this.dtTrigger.next(this.dtOptions);
    });
  }
  deleteSinhVien(sinhvienID: any, modal: any) {
    this.serviceHttp.deleteSinhVien(sinhvienID).subscribe((data) => {
      console.log(data.data);
      if (data.message == 'success') {
        this.open(
          modal,
          { textBtn: 'OKE', message: 'Bạn đã xóa thành công' },
          data.data
        );
        this.updatePhong(sinhvienID);
        this.serviceHttp.getAllSinhVien().subscribe((data) => {
          this.sinhvien = data.data;
          console.log(this.sinhvien);
          this.dtTrigger.next(this.dtOptions);
        });
      } else {
        this.open(
          modal,
          { textBtn: 'OKE', message: 'Bạn Đã xóa không thành Công' },
          data.data
        );
      }
    });
  }
  open(modal: any, content: any, data: any) {
    this.textBtn = content.textBtn;
    this.message = content.message + ' ' + data.HoTen;
    this.modalService.open(modal);
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  updatePhong(sinhvienID: any) {
    this.sinhvien.forEach((item: any) => {
      if (item._id == sinhvienID) {
        this.serviceHttp.getPhong(item.PhongID).subscribe((data) => {
          this.phong = data.data;
          this.phong.SoLuongDangO = this.phong.SoLuongDangO - 1;
          this.serviceHttp.updatePhong(this.phong,this.phong._id).subscribe((data) => {
            console.log(data);
          });
        });
      }
    });
  }
}
