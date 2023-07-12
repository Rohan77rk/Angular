import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { AdminAuthService } from '../admin-auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {
  constructor(public _auth : AdminAuthService){}

}
