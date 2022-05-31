import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  myScriptElement: HTMLScriptElement;
  isDropdownMenu:boolean = false;
  constructor( ) {
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "https://demo.dashboardpack.com/architectui-html-free/assets/scripts/main.js";
    document.body.appendChild(this.myScriptElement);
    this.myScriptElement.src = "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js";
    document.body.appendChild(this.myScriptElement);
   }
   dropdownMenu(){
    this.isDropdownMenu = !this.isDropdownMenu
   }
  ngOnInit(): void {
  }

}
