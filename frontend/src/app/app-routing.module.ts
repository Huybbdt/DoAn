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

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [

      { path: '',
      component: HomePageComponent,
      },
      { path: 'login',
      component: LoginComponent,
      },
    ]
  },
  {
    path: 'admin',
   component: AdminComponent,
   canActivate: [AuthGuard],
   children: [
    { path: '',
    component:  ThongkeComponent,
    },
    { path: 'nhanvien',
    component: NhanvienComponent,
    },
  ]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [],

  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
