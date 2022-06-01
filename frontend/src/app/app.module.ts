import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './modules/core/component/home/home.component';
import { LoginComponent } from './modules/core/component/home/login/login.component';
import { HomePageComponent } from './modules/core/component/home/home-page/home-page.component';
import { ServiceHttpService } from './modules/share/service-http.service';
import { CookieService } from 'ngx-cookie-service';
import { DataTablesModule } from 'angular-datatables';
import { NhanvienComponent } from './modules/core/component/admin/nhanvien/nhanvien.component';
import { ThongkeComponent } from './modules/core/component/admin/thongke/thongke.component';
import { AdminComponent } from './modules/core/component/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    HomePageComponent,
    NhanvienComponent,
    ThongkeComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [ServiceHttpService,CookieService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
