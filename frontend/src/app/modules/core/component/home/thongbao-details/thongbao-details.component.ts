import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';

@Component({
  selector: 'app-thongbao-details',
  templateUrl: './thongbao-details.component.html',
  styleUrls: ['./thongbao-details.component.scss']
})
export class ThongbaoDetailsComponent implements OnInit {
  params:any;
  thongbao:any;
  constructor( private serviceHttp: ServiceHttpService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.params = params;
      this.serviceHttp.getThongBao(this.params['id']).subscribe((data) => {
        this.thongbao  = data.data;
      });
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
