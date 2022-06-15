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
import { NhanvienFormComponent } from './modules/core/component/admin/nhanvien-form/nhanvien-form.component';
import { PhongComponent } from './modules/core/component/admin/phong/phong.component';
import { PhongFormComponent } from './modules/core/component/admin/phong-form/phong-form.component';
import { SinhvienComponent } from './modules/core/component/admin/sinhvien/sinhvien.component';
import { SinhvienFormComponent } from './modules/core/component/admin/sinhvien-form/sinhvien-form.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { TaikhoanFormComponent } from './modules/core/component/admin/taikhoan-form/taikhoan-form.component';
import { ThongbaoComponent } from './modules/core/component/admin/thongbao/thongbao.component';
import { ThongbaoFormComponent } from './modules/core/component/admin/thongbao-form/thongbao-form.component';
import { BienlaithutienComponent } from './modules/core/component/admin/bienlaithutien/bienlaithutien.component';
import { BienlaithutienFormComponent } from './modules/core/component/admin/bienlaithutien-form/bienlaithutien-form.component';
import { HoadondiennuocComponent } from './modules/core/component/admin/hoadondiennuoc/hoadondiennuoc.component';
import { HoadondiennuocFormComponent } from './modules/core/component/admin/hoadondiennuoc-form/hoadondiennuoc-form.component';
import { ThietbiFormComponent } from './modules/core/component/admin/thietbi-form/thietbi-form.component';
import { ThietbiComponent } from './modules/core/component/admin/thietbi/thietbi.component';
import { DuyetsinhvienComponent } from './modules/core/component/admin/duyetsinhvien/duyetsinhvien.component';
import { ThongbaoListComponent } from './modules/core/component/home/thongbao-list/thongbao-list.component';
import { ThongbaoDetailsComponent } from './modules/core/component/home/thongbao-details/thongbao-details.component';
import { DangkyphongComponent } from './modules/core/component/home/dangkyphong/dangkyphong.component';
import { DangkyphongFormComponent } from './modules/core/component/home/dangkyphong-form/dangkyphong-form.component';
import { BanggiadiennuocComponent } from './modules/core/component/home/banggiadiennuoc/banggiadiennuoc.component';
import { NoiquyComponent } from './modules/core/component/home/noiquy/noiquy.component';
import { ProfileComponent } from './modules/core/component/admin/profile/profile.component';
import { ChangePasswordComponent } from './modules/core/component/admin/change-password/change-password.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    HomePageComponent,
    NhanvienComponent,
    ThongkeComponent,
    NhanvienFormComponent,
    PhongComponent,
    PhongFormComponent,
    SinhvienComponent,
    SinhvienFormComponent,
    TaikhoanFormComponent,
    ThongbaoComponent,
    ThongbaoFormComponent,
    BienlaithutienComponent,
    BienlaithutienFormComponent,
    HoadondiennuocComponent,
    HoadondiennuocFormComponent,
    ThietbiFormComponent,
    ThietbiComponent,
    DuyetsinhvienComponent,
    ThongbaoListComponent,
    ThongbaoDetailsComponent,
    DangkyphongComponent,
    DangkyphongFormComponent,
    BanggiadiennuocComponent,
    NoiquyComponent,
    ProfileComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    NgSelectModule
  ],
  providers: [ServiceHttpService,CookieService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
