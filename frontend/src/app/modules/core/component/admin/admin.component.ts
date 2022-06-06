import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  myScriptElement: HTMLScriptElement;
  isDropdownMenu:boolean = false;
  data: any;
  nhanvien:any;
  constructor(private cookieService: CookieService,private router: Router,private serviceHttp: ServiceHttpService) {
  }

  ngOnInit(): void {
   this.data = localStorage.getItem('data');
   this.data = JSON.parse(this.data);
   this.serviceHttp.getNhanVien(this.data.data.NhanvienID).subscribe(data => {
    localStorage.setItem('nhanvien',JSON.stringify(data));
  });
  this.nhanvien = localStorage.getItem('nhanvien');
  this.nhanvien =  JSON.parse(this.nhanvien);
  console.log(this.nhanvien);

  //  this.getNhanVien(this.data.data.NhanvienID);
  }
  getNhanVien(id:any) {
    this.serviceHttp.getNhanVien(id).subscribe(data => {
      this.nhanvien = data.data;

    })

  }
  dropdownMenu(){
    this.isDropdownMenu = !this.isDropdownMenu
  }


  logout() {
    this.cookieService.deleteAll();
    localStorage.clear();
    this.router.navigate(['/home/login']);
  }
}
