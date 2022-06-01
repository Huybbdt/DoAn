import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  myScriptElement: HTMLScriptElement;
  isDropdownMenu:boolean = false;
  constructor(private cookieService: CookieService,private router: Router,) {
  }

  ngOnInit(): void {

  }

  dropdownMenu(){
    this.isDropdownMenu = !this.isDropdownMenu
  }


  logout() {
    this.cookieService.deleteAll();
    this.router.navigate(['/home/login']);
  }
}
