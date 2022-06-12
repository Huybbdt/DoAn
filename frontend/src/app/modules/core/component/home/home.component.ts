import { Component, OnInit } from '@angular/core';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  thongbaolist:any;
  constructor(private serviceHttp: ServiceHttpService) { }

  ngOnInit(): void {
    this.serviceHttp.getAllThongBao().subscribe((data) => {
      this.thongbaolist = data.data;
    });
  }

}
