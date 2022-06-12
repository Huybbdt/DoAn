import { Component, OnInit } from '@angular/core';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';

@Component({
  selector: 'app-dangkyphong',
  templateUrl: './dangkyphong.component.html',
  styleUrls: ['./dangkyphong.component.scss']
})
export class DangkyphongComponent implements OnInit {
  phongTrong: any;
  constructor( private serviceHttp: ServiceHttpService) { }

  ngOnInit(): void {
    this.serviceHttp.getPhongTrong().subscribe((data) => {
      this.phongTrong = data.data;
      console.log(this.phongTrong);

    });
  }

}
