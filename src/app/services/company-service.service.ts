import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';
import { Coupon } from '../models/coupon.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  private basicUrl : string = "http://localhost:8080/company";
 
  constructor(private httpClient : HttpClient) {}

  public addCoupon(coupon : Coupon) : Observable <Coupon> {
    let myHeaders = new HttpHeaders().set('token' , sessionStorage.getItem('token')!);
    return this.httpClient.post<Coupon>(
      this.basicUrl + "/addCoupon" , coupon ,{headers : myHeaders}
    );
  }

  public getAllCouponsByCategory(category : string) : Observable <Coupon[]> {
    let myHeaders = new HttpHeaders().set('token' , sessionStorage.getItem('token')!);
    return this.httpClient.get<Coupon[]>(
      this.basicUrl + "/coupons/category?category=" + category ,{headers : myHeaders}
    );
  }

  public getAllCoupons() : Observable <Coupon[]> {
    let myHeaders = new HttpHeaders().set('token' , sessionStorage.getItem('token')!);
    return this.httpClient.get<Coupon[]>(
      this.basicUrl + "/coupons/company" ,{headers : myHeaders}
    );
  }

  public getAllCouponsByMaxPrice( maxPrice : number) : Observable <Coupon[]>{
    let myHeaders = new HttpHeaders().set('token' , sessionStorage.getItem('token')!);
return this.httpClient.get<Coupon[]>(
  this.basicUrl + "/coupons/price?price=" + maxPrice ,{headers : myHeaders}
);
}

public getCompanyInformation () : Observable <Company>{
  let myHeaders = new HttpHeaders().set('token' , sessionStorage.getItem('token')!);
  return this.httpClient.get<Company>(
    this.basicUrl + "/info" ,{headers : myHeaders}
  );
}

 public updateCoupon( id : number , coupon : Coupon) : Observable <Coupon> {
  let myHeaders = new HttpHeaders().set('token' , sessionStorage.getItem('token')!);
   return this.httpClient.put<Coupon>(
     this.basicUrl + "/update?couponId=" + id , coupon ,{headers : myHeaders}
   );
 }

 public deleteCoupon( id :number) : Observable <Coupon>{
  let myHeaders = new HttpHeaders().set('token' , sessionStorage.getItem('token')!);
   return this.httpClient.delete<Coupon>(
     this.basicUrl + "/delete?couponId=" + id ,{headers : myHeaders}
   );
 }
}
