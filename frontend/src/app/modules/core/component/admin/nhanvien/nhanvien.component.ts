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
    language : {
      "zeroRecords": "Không tìm thấy kết quả",
      "search":         "Tìm kiếm: ",
      "emptyTable": "Không có dữ liệu",
      "loadingRecords": "Đang tải...",
      "info": "Hiển thị _START_ tới _END_ của _TOTAL_ dữ liệu",
      "infoEmpty": "Hiển thị 0 tới 0 của 0 dữ liệu",
      "lengthMenu": "Hiển thị _MENU_ dữ liệu",
      "paginate": {
        "first": "Đầu tiên",
        "last": "Cuối cùng",
        "next": "Sau",
        "previous": "Trước"
      },
    }
  };
  this.getListNhanVien();
  }
  deleteNhanVien(nhanvienID: any,modal:any) {
    this.serviceHttp.deleteNhanVien(nhanvienID).subscribe((data) => {
      if(data.message == 'success') {
        this.open(modal);
        $('#datatables').DataTable().destroy();
        this.getListNhanVien();
      }
    });
  }
  open(modal:any) {
    this.modalService.open(modal);
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  getListNhanVien() {
    this.serviceHttp.getAllNhanVien().subscribe((data) => {
      this.nhanvien = data.data;
      this.dtTrigger.next(this.dtOptions);
    });
  }
}
