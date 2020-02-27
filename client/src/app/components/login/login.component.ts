import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onHandleLogin(e: any) {
    const users = {username: e.target.username.value, password: e.target.password.value};
    this.authService.doLogin(users)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/dashboard']);
        }
      );
  }

}
