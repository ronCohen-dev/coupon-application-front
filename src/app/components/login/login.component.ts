import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/models/user-interface.model';
import { FlagsService } from 'src/app/services/flags.service';
import { LoginServiceService } from 'src/app/services/login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: UserInterface = new UserInterface;

  public messaggeUser: string = "";

  constructor(private router: Router, private service: LoginServiceService, public fag: FlagsService) { }

  ngOnInit(): void {
  }

  public login() {

    this.service.login(this.user).subscribe(
      (t: any) => {
        console.dir(t);
        sessionStorage.setItem('token', t.token);
        this.user.token = t;
        this.router.navigate(['home']);
        if (this.user.clientType == 'Admin') {
          this.fag.adminLogIn = true;
        } else if (this.user.clientType == 'Company') {
          this.fag.companyLogIn = true;
        } else if (this.user.clientType == 'Customer') {
          this.fag.customerLogIn = true;
        }
        this.fag.httpLoginPage = true;
      },
      (e: HttpErrorResponse) => {
        this.messaggeUser = "You are Not loged in" + e.error.messagge;
      }
    );
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}


