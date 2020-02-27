import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:2000/users/login';

  constructor(private http: HttpClient, private router: Router) { }

  doLogin(user): any {
    return this.http.post(this.loginUrl, user);
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
