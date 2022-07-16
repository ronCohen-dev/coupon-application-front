import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlagsService {

  public adminLogIn: boolean = false;

  public companyLogIn: boolean = false;

  public customerLogIn: boolean = false;

  public httpLoginPage: boolean = false;

  constructor() { }
}
