import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';

@Component({
  selector: 'app-duyetsinhvien',
  templateUrl: './duyetsinhvien.component.html',
  styleUrls: ['./duyetsinhvien.component.scss']
})
export class DuyetsinhvienComponent implements OnInit {
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
    this.serviceHttp.getSinhVienChoDuyet().subscribe((data) => {
      this.sinhvien = data.data;
      this.dtTrigger.next(this.dtOptions);
    });
  }
  deleteSinhVien(sinhvienID: any, modal: any) {
    this.message = 'Xóa'
    this.serviceHttp.deleteSinhVien(sinhvienID).subscribe((data) => {
      console.log(data.data);
      if (data.message == 'success'){
        this.open(modal);
        this.serviceHttp.getSinhVienChoDuyet().subscribe((data) => {
          this.sinhvien = data.data;
          $('#datatables').DataTable().destroy();
          this.dtTrigger.next(this.dtOptions);
        });
      }
    });
  }
  duyetsinhvien(sinhvienID: any, modal: any) {
    this.message = 'Duyệt'
    this.serviceHttp.getSinhVien(sinhvienID).subscribe((data:any) => {
      this.serviceHttp.updateSinhVien({...data.data,TrangThai: 'Đang ở'},sinhvienID).subscribe((item:any) => {
        if (item.message == 'success') {
          this.open(modal);
          this.serviceHttp.getSinhVienChoDuyet().subscribe((data) => {
            this.sinhvien = data.data;
            $('#datatables').DataTable().destroy();
            this.dtTrigger.next(this.dtOptions);
          });
        }
      })
    })
  }
  open(modal: any,message?: string) {
    if(message == 'delete') {
      this.message = 'Xóa'
    }
    if(message == 'duyet') {
      this.message = 'Duyệt'
    }
    this.modalService.open(modal);
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
