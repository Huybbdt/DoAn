import { Component, OnInit } from '@angular/core';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';

@Component({
  selector: 'app-banggiadiennuoc',
  templateUrl: './banggiadiennuoc.component.html',
  styleUrls: ['./banggiadiennuoc.component.scss']
})
export class BanggiadiennuocComponent implements OnInit {

  hoadon: any;
  phong: any;
  constructor( private serviceHttp: ServiceHttpService) { }

  ngOnInit(): void {
    this.serviceHttp.getAllPhong().subscribe((data) => {
      this.phong = data.data;
    });
    this.serviceHttp.getHoaDonDienNuocChuaNop().subscribe((data) => {
      this.hoadon = data.data;
    });
  }
}
