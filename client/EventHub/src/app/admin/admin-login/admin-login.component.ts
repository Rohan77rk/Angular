import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { AdminAuthService } from '../admin-auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Admin } from 'src/Admin';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor( private fobj : FormBuilder,private _auth : AdminAuthService, private _router: Router ){}
  AdminUserData : Admin = new Admin();  

  AdminInfo = this.fobj.group(
    {
      
      Email: ['',[Validators.required]],
      Password: ['',[Validators.required]],
      

    }
  )




  login() {
    if (this.AdminInfo.valid) {
      const formData = this.AdminInfo.value;
      this.AdminUserData = {
        _id:null,
        Name:null,        
        Email: formData.Email,
        Password: formData.Password
        
      };

    this._auth.Adminlogin(this.AdminUserData)
      .subscribe(res => {
        console.log("logged in successfully", res);
        localStorage.setItem('token', res.token);
        this._router.navigate(['admin/adminevent']);
      },
      error => {
        console.log("login error", error);
      });
  }


}
}