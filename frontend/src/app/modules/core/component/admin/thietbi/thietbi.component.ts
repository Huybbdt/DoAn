import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';

@Component({
  selector: 'app-thietbi',
  templateUrl: './thietbi.component.html',
  styleUrls: ['./thietbi.component.scss']
})
export class ThietbiComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  thietbi: any = [];
  nhanvien:any;
  Phong:any;
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
    info: false,
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
    this.serviceHttp.getAllPhong().subscribe((data) => {
      this.Phong = data.data;
    });
    this.getListThietBi();
  }
  deleteThietBi(thietbiID: any,modal:any) {
    this.serviceHttp.deleteThietBi(thietbiID).subscribe((data) => {
      if(data.message == 'success') {
        this.open(modal);
      }
    });
    this.serviceHttp.getAllThietBi().subscribe((data) => {
      this.thietbi = data.data;
      $('#datatables').DataTable().destroy();
      this.dtTrigger.next(this.dtOptions);
    });

  }

  open(modal:any) {
    this.modalService.open(modal);
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  getListThietBi() {
    this.serviceHttp.getAllThietBi().subscribe((data) => {
      this.thietbi = data.data;
      this.dtTrigger.next(this.dtOptions);
    });
  }
}
