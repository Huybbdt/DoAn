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
  phongNu: any[] = [];
  phongNam: any[] = [];
  ngOnInit(): void {
    this.serviceHttp.getPhongTrong().subscribe((data) => {
      this.phongTrong = data.data;
      this.phongTrong.forEach((data:any) => {
        if(data.KhuID=='629b35297a11b1ab6fcfb606') {
          this.phongNu.push(data);
          console.log(this.phongNu);

        }else {
          this.phongNam.push(data);
          console.log(this.phongNam);
        }
      })
    });
  }

}
