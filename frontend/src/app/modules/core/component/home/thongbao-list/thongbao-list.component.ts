import { Component, OnInit } from '@angular/core';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';

@Component({
  selector: 'app-thongbao-list',
  templateUrl: './thongbao-list.component.html',
  styleUrls: ['./thongbao-list.component.scss']
})
export class ThongbaoListComponent implements OnInit {
  thongbaolist:any;
  constructor(private serviceHttp: ServiceHttpService,) { }

  ngOnInit(): void {
    this.getListThongBao();
  }
  getListThongBao() {
    this.serviceHttp.getAllThongBao().subscribe((data) => {
      this.thongbaolist = data.data;
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
