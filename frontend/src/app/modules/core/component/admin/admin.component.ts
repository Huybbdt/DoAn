import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  myScriptElement: HTMLScriptElement;
  isDropdownMenu:boolean = false;
  data: any;
  nhanvien:any;
  sinhvien:any;
  constructor(private cookieService: CookieService,private router: Router,private serviceHttp: ServiceHttpService) {
  }

  ngOnInit(): void {
    if(this.serviceHttp.reload == 0) {
      this.serviceHttp.reload = 1;
      setTimeout(() => {
        window.location.reload();
      },500)

    }
    this.data = localStorage.getItem('data');
    this.data = JSON.parse(this.data);
    this.serviceHttp.getNhanVien(this.data.data.NhanvienID).subscribe(data => {
      localStorage.setItem('nhanvien',JSON.stringify(data));
    });
    this.nhanvien = localStorage.getItem('nhanvien');
    this.nhanvien =  JSON.parse(this.nhanvien);
    this.serviceHttp.getSinhVienChoDuyet().subscribe((data) => {
      this.sinhvien = data.data;
    });
  }
  getNhanVien(id:any) {
    this.serviceHttp.getNhanVien(id).subscribe(data => {
      this.nhanvien = data.data;
    })

  }
  dropdownMenu(){
    this.isDropdownMenu = !this.isDropdownMenu
  }
  ngOnDestroy(): void {
    this.serviceHttp.reload = 0;
  }
  logout() {
    this.cookieService.deleteAll();
    localStorage.clear();
    this.router.navigate(['/home/login']);
  }
  lengthSinhVien() {
    if(this.sinhvien.length) {
    }
  }
}
