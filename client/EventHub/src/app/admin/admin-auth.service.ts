import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  private apiUrl = "http://localhost:4000/eventhub";
  constructor(private router: Router, private http: HttpClient) {}
  

   //admin login

   Adminlogin(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/admin/adminlogin`, credentials);
  }

  AdminisLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  Adminlogout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/admin/adminlogin']);
  }

  AdmingetToken(): string | null {
    return localStorage.getItem('token');
  }
}
