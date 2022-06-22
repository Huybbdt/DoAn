import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';

@Component({
  selector: 'app-thongbao',
  templateUrl: './thongbao.component.html',
  styleUrls: ['./thongbao.component.scss']
})
export class ThongbaoComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  thongbao: any = [];
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

    this. getListThongBao();

  }
  deleteThongBao(thongbaoID: any,modal:any) {
    this.serviceHttp.deleteThongBao(thongbaoID).subscribe((data) => {
      if(data.message == 'success') {
        this.open(modal);
      }
    });
    this.serviceHttp.getAllThongBao().subscribe((data) => {
      this.thongbao = data.data;
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
  getListThongBao() {
    this.serviceHttp.getAllThongBao().subscribe((data) => {
      this.thongbao = data.data;
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
    return [day, month, year].join('-');
  }
}
