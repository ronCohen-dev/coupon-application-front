import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../models/user-interface.model';
import { FlagsService } from './flags.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private httpClient: HttpClient) { }
  private basicUrl: string = "http://localhost:8080/api";


  public login(userInformation: UserInterface): Observable<string> {
    let url = this.basicUrl + '/login';
    let theHeaders = new HttpHeaders().set('Accept', 'text/plain');
    let options = { headers: theHeaders };
    console.dir(userInformation);

    return this.httpClient.post<string>(url, userInformation, options);
  }
}

