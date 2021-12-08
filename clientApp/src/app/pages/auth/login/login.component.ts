import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';
import { UserSignInDto } from '../user.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  onLoginUser(form: NgForm) {
    if (form.invalid) return;

    const authdata: UserSignInDto = {
      email: form.value.inputEmail,
      password: form.value.inputPassword
    }
    this.authService.loginUser(authdata);
  }


  initContent() {
  }


  ngOnInit(): void {
    this.initContent();
  }

}
