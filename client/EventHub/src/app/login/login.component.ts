import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Users } from 'src/Users';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginUserData :Users = new Users();

  constructor( private fobj:FormBuilder,public _auth : AuthService, private _router: Router ){}

  LoginInfo = this.fobj.group(
    {
      
      Email: ['',[Validators.required]],
      Password: ['',[Validators.required]],
      

    }
  )

  login() {
    if (this.LoginInfo.valid) {
      const formData = this.LoginInfo.value;
      this.loginUserData = {
        _id:null,
        Name:null,        
        Email: formData.Email,
        Password: formData.Password
        
      };

    this._auth.login(this.loginUserData)
      .subscribe(res => {
        console.log("logged in successfully", res);
        localStorage.setItem('token', res.token);
        this._router.navigate(['/specialevents']);
      },
      error => {
        console.log("login error", error);
      });
  }
  

  }
}
