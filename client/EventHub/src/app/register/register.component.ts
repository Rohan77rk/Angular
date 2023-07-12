import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Users } from 'src/Users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  loginUserData : Users = new Users();
  constructor(private fobj : FormBuilder, private _auth : AuthService,private router : Router){}

  LoginInfo = this.fobj.group(
    {
      Name:['',Validators.required],
      Email: ['',[Validators.required]],
      Password: ['',[Validators.required]],
      

    }
  )
  
  Register(){
    if (this.LoginInfo.valid) {
      const formData = this.LoginInfo.value;
      this.loginUserData = {
        _id:null,
        Name:formData.Name,        
        Email: formData.Email,
        Password: formData.Password
        
      };


    this._auth.register(this.loginUserData).
    subscribe(res => {
      console.log("Registration Successfull",res);
      this.router.navigate(['/login']);
    },
    error => {
      console.log("registration error",error);
    })
  }



  }
}
