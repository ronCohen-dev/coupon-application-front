import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private basicUrl: string = "http://localhost:8080/admin";

  
  constructor(private httpClient: HttpClient) {}

// companies methods :
public getAllCompanies(): Observable<Company[]>{
  let myHeaders = new HttpHeaders().set('token' ,sessionStorage.getItem('token')!);
  return this.httpClient.get<Company[]>(
    this.basicUrl + "/companies" , {headers : myHeaders}
    );
}

public getOneCompany(id : number) : Observable<Company>{
  let myHeaders = new HttpHeaders().set('token',sessionStorage.getItem('token')!);
  return this.httpClient.get<Company>(
    this.basicUrl + "/company?companyId=" + id , {headers : myHeaders}
    );
  }
  
public addOneCompany(company : Company) : Observable<Company>{
  let myHeaders = new HttpHeaders().set('token',sessionStorage.getItem('token')!);
  return this.httpClient.post<Company>(
  this.basicUrl + "/company",company ,{headers : myHeaders}
  );
}

public updateCompany(company : Company , id : number) : Observable<Company>{
  let myHeaders = new HttpHeaders().set('token' , sessionStorage.getItem('token')!);
  return this.httpClient.put<Company>(
    this.basicUrl + "/company?companyId=" + id ,company ,{headers : myHeaders}
  );
}

public deleteOneCompany(id : number) : Observable<Company>{
  let myHeaders = new HttpHeaders().set('token' , sessionStorage.getItem('token')!);
  return this.httpClient.delete<Company>(
    this.basicUrl + "/company?companyId=" + id ,{headers : myHeaders}
    );
  }

  // customer methods :
  public getAllCustomers(): Observable<Customer[]>{
    let myHeaders = new HttpHeaders().set('token' , sessionStorage.getItem('token')!);
    return this.httpClient.get<Customer[]>(
    this.basicUrl + "/customers" ,{headers : myHeaders}
    );
  }
  
  public getOneCustomer( id :number) : Observable<Customer>{
    let myHeaders = new HttpHeaders().set('token' , sessionStorage.getItem('token')!);
    return this.httpClient.get<Customer>(
      this.basicUrl + "/customer?customerId=" + id ,{headers : myHeaders}
    );
  }

  public addCustomer(customer : Customer) : Observable<Customer>{
    let myHeaders = new HttpHeaders().set('token' , sessionStorage.getItem('token')!);
    return this.httpClient.post<Customer>(
      this.basicUrl + "/customer" , customer ,{headers : myHeaders}
    );
  }

  public updateCustomer( customer : Customer , id : number) : Observable<Customer>{
    let myHeaders = new HttpHeaders().set('token' , sessionStorage.getItem('token')!);
    return this.httpClient.put<Customer>(
      this.basicUrl + "/customer?customerId=" + id , customer ,{headers : myHeaders}
    );
  }

  public deleteOneCustomer( id : number) : Observable<Customer> { 
    let myHeaders = new HttpHeaders().set('token' , sessionStorage.getItem('token')!);
    return this.httpClient.delete<Customer>(
      this.basicUrl + "/customer?customerId=" + id ,{headers : myHeaders}
    );
  }
}
