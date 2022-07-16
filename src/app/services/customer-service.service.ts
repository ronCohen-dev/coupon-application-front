import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coupon } from '../models/coupon.model';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private basicUrl = "http://localhost:8080/customer";

  constructor(private httpClient : HttpClient) {}

  public getAllCouponsSystem() : Observable <Coupon[]>{
    let myHeaders = new HttpHeaders().set('token' , sessionStorage.getItem('token')!);
    return this.httpClient.get<Coupon[]>(
      this.basicUrl + "/coupons/system" ,{headers : myHeaders}
    );
  }
  

  public buyCoupon (id : number) : Observable <Coupon>{
    let myHeaders = new HttpHeaders().set('token' , sessionStorage.getItem('token')!);
    return this.httpClient.post<Coupon>(
      this.basicUrl + "/addCoupon?couonId=" + id ,null ,{headers : myHeaders}
    );
  }
    public getAllCoupons () : Observable <Coupon[]> {
      let myHeaders = new HttpHeaders().set('token' , sessionStorage.getItem('token')!);
      return this.httpClient.get<Coupon[]>(
        this.basicUrl + "/coupons" ,{headers : myHeaders}
      );
    }

    public getAllCouponsByCategory (category : string) : Observable<Coupon[]>{
      let myHeaders = new HttpHeaders().set('token' , sessionStorage.getItem('token')!);
      return this.httpClient.get<Coupon[]>(
        this.basicUrl + "/coupons/category?category=" + category ,{headers : myHeaders}
       );
    }

    public getAllCouponsByMaxPrice (maxPrice : number) : Observable<Coupon[]>{
      let myHeaders = new HttpHeaders().set('token' , sessionStorage.getItem('token')!);
      return this.httpClient.get<Coupon[]>(
        this.basicUrl + "/coupons/price?price=" + maxPrice ,{headers : myHeaders}
      );
    }

    public getProfileInformation() : Observable<Customer>{
      let myHeaders = new HttpHeaders().set('token' , sessionStorage.getItem('token')!);
      return this.httpClient.get<Customer>(
        this.basicUrl + "/imfo" ,{headers : myHeaders}
      );
    }
}
