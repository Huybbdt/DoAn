import { Component, OnInit } from '@angular/core';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data: any;
  loginForm: FormGroup;
  constructor(private cookieService: CookieService,private serviceHttp: ServiceHttpService,
    private formBuilder: FormBuilder,private router: Router,) {

    }

  ngOnInit(): void {
    this.createProfileForm();
  }
  createProfileForm(): void {
    this.loginForm = this.formBuilder.group({
      username: [ '', [Validators.required]
      ],
      password: [ '', [Validators.required]],
    });
    // this.editUserForm.valueChanges.subscribe((data) => { });
  }
  onSubmitForm(): any {
    this.serviceHttp.postLogin(this.loginForm.value).subscribe(data => {
      if(data.status === 200) {
        console.log(data);
        this.cookieService.set('token',data.token);
        localStorage.setItem('nhanvien',JSON.stringify(data.data))
        this.router.navigate(['/admin'])
      }
    })
  }
}
