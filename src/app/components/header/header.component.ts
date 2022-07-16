import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlagsService } from 'src/app/services/flags.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private res !: string;
  private token !: string;
  

  constructor(private router: Router , public fag: FlagsService) { }

  ngOnInit(): void {
  }


  gotoHome() {
    this.router.navigate(['home']);
  }

  goToAboutUs() {
    this.router.navigate(['aboutUs']);
  }

  logout() {
    this.res = '';
    this.token = '';
    this.fag.httpLoginPage = false;
    sessionStorage.clear();
    this.router.navigate(['login']);
    alert('you are logged out');

  }

  goToStore() {
    this.router.navigate(['store']);
  }

  gotoProfile() {
    this.router.navigate(['profile']);
  }
}
