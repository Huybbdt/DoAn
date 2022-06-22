import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';

@Component({
  selector: 'app-bienlaithutien',
  templateUrl: './bienlaithutien.component.html',
  styleUrls: ['./bienlaithutien.component.scss']
})
export class BienlaithutienComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  bienlaithutien: any = [];
  nhanvien:any;
  sinhvien:any;
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
    this. getListBienLaiThuTien();
    this.serviceHttp.getAllSinhVien().subscribe((data) => {
      this.sinhvien = data.data;
    });
    this.serviceHttp.getAllNhanVien().subscribe((data) => {
      this.nhanvien = data.data;
    });
  }
  deleteBienLaiThuTien(bienlaithutienID: any,modal:any) {
    this.serviceHttp.deleteBienLaiThuTien(bienlaithutienID).subscribe((data) => {
      if(data.message == 'success') {
        this.open(modal);
      }
    });
    this.serviceHttp.getAllBienLaiThuTien().subscribe((data) => {
      this.bienlaithutien = data.data;
      $('#datatables').DataTable().destroy();
      this.dtTrigger.next(this.dtOptions);
      this.dtTrigger.next(this.dtOptions);
    });
  }

  open(modal:any) {
    this.modalService.open(modal);
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  getListBienLaiThuTien() {
    this.serviceHttp.getAllBienLaiThuTien().subscribe((data) => {
      this.bienlaithutien = data.data;
      this.dtTrigger.next(this.dtOptions);
    });
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
    return [day, month, year].join('-') + ' ' + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  }

}
