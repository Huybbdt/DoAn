import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './modules/core/component/admin/admin.component';
import { HomeComponent } from './modules/core/component/home/home.component';
import { LoginComponent } from './modules/core/component/home/login/login.component';
import { HomePageComponent } from './modules/core/component/home/home-page/home-page.component';
import { AuthGuard } from './modules/auth.guard';
import { NhanvienComponent } from './modules/core/component/admin/nhanvien/nhanvien.component';
import { ThongkeComponent } from './modules/core/component/admin/thongke/thongke.component';
import { NhanvienFormComponent } from './modules/core/component/admin/nhanvien-form/nhanvien-form.component';
import { PhongComponent } from './modules/core/component/admin/phong/phong.component';
import { PhongFormComponent } from './modules/core/component/admin/phong-form/phong-form.component';
import { SinhvienComponent } from './modules/core/component/admin/sinhvien/sinhvien.component';
import { SinhvienFormComponent } from './modules/core/component/admin/sinhvien-form/sinhvien-form.component';
import { TaikhoanFormComponent } from './modules/core/component/admin/taikhoan-form/taikhoan-form.component';
import { ThongbaoComponent } from './modules/core/component/admin/thongbao/thongbao.component';
import { ThongbaoFormComponent } from './modules/core/component/admin/thongbao-form/thongbao-form.component';
import { BienlaithutienComponent } from './modules/core/component/admin/bienlaithutien/bienlaithutien.component';
import { BienlaithutienFormComponent } from './modules/core/component/admin/bienlaithutien-form/bienlaithutien-form.component';
import { HoadondiennuocComponent } from './modules/core/component/admin/hoadondiennuoc/hoadondiennuoc.component';
import { HoadondiennuocFormComponent } from './modules/core/component/admin/hoadondiennuoc-form/hoadondiennuoc-form.component';
import { ThietbiComponent } from './modules/core/component/admin/thietbi/thietbi.component';
import { ThietbiFormComponent } from './modules/core/component/admin/thietbi-form/thietbi-form.component';
import { ThongbaoListComponent } from './modules/core/component/home/thongbao-list/thongbao-list.component';
import { ThongbaoDetailsComponent } from './modules/core/component/home/thongbao-details/thongbao-details.component';
import { DangkyphongComponent } from './modules/core/component/home/dangkyphong/dangkyphong.component';
import { DangkyphongFormComponent } from './modules/core/component/home/dangkyphong-form/dangkyphong-form.component';
import { DuyetsinhvienComponent } from './modules/core/component/admin/duyetsinhvien/duyetsinhvien.component';
import { BanggiadiennuocComponent } from './modules/core/component/home/banggiadiennuoc/banggiadiennuoc.component';
import { NoiquyComponent } from './modules/core/component/home/noiquy/noiquy.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'login', component: LoginComponent },
      {
        path: 'thongbao',
        component: ThongbaoListComponent,
      }, {
        path: 'thongbao/:id',
        component: ThongbaoDetailsComponent,
      },
      {
        path: 'dangkyphong',
        component: DangkyphongComponent,
      }, {
        path: 'dangkyphong/:id',
        component: DangkyphongFormComponent,
      },
      {
        path: 'banggiadiennuoc',
        component: BanggiadiennuocComponent,
      },
      {
        path: 'noiquy',
        component: NoiquyComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ThongkeComponent },
      {
        path: 'nhanvien',
        component: NhanvienComponent,
      }, {
        path: 'nhanvien/:active/:id',
        component: NhanvienFormComponent,
      },
      {
        path: 'phong',
        component: PhongComponent,
      }, {
        path: 'phong/:active/:id',
        component: PhongFormComponent,
      },
      {
        path: 'sinhvien',
        component: SinhvienComponent,
      }, {
        path: 'sinhvien/:active/:id',
        component: SinhvienFormComponent,
      },
      {
        path: 'taikhoan/:id',
        component: TaikhoanFormComponent,
      },{
        path: 'thongbao',
        component: ThongbaoComponent,
      }, {
        path: 'thongbao/:active/:id',
        component: ThongbaoFormComponent,
      },
      {
        path: 'bienlaithutien',
        component: BienlaithutienComponent,
      }, {
        path: 'bienlaithutien/:active/:id',
        component: BienlaithutienFormComponent,
      },
      {
        path: 'hoadondiennuoc',
        component: HoadondiennuocComponent,
      }, {
        path: 'hoadondiennuoc/:active/:id',
        component: HoadondiennuocFormComponent,
      },
      {
        path: 'thietbi',
        component: ThietbiComponent,
      }, {
        path: 'thietbi/:active/:id',
        component: ThietbiFormComponent,
      },
      {
        path: 'duyetsinhvien',
        component: DuyetsinhvienComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
