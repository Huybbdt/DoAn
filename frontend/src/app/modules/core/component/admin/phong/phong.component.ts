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
    this.serviceHttp.getAllKhu().subscribe((data) => {
      this.khu = data.data;
    });
    this. getListPhong();

  }
  deletePhong(phongID: any,modal:any) {
    this.serviceHttp.deletePhong(phongID).subscribe((data) => {
      if(data.message == 'success') {
        this.open(modal);
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
  open(modal:any) {
    this.modalService.open(modal);
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  getListPhong() {
    this.serviceHttp.getAllPhong().subscribe((data) => {
      this.phong = data.data;
      this.dtTrigger.next(this.dtOptions);
    });
  }
}
