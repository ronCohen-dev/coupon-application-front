import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { Coupon } from 'src/app/models/coupon.model';
import { Customer } from 'src/app/models/customer.model';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { CompanyServiceService } from 'src/app/services/company-service.service';
import { CustomerServiceService } from 'src/app/services/customer-service.service';
import { FlagsService } from 'src/app/services/flags.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public company: Company = new Company;

  public companyId !: number;

  public oneCompany !: Company;

  public companies !: Company[];

  public customer: Customer = new Customer;

  public customerId !: number;

  public oneCustomer !: Customer;

  public customers !: Customer[];

  public customerInformation !: Customer;

  public coupon: Coupon = new Coupon;

  public coupons !: Coupon[];

  public couponsCategory !: Coupon[];

  public customerCoupons !: Coupon[];

  public couponsPrice !: Coupon[];

  public couponsOfCustomerByCategory !: Coupon[];

  public couponsOfCustomerByMaxPrice !: Coupon[];

  public couponCategory !: string;

  public couponCategoryCustomer !: string;

  public couponId !: number;

  public couponIdToBuy !: number;

  public couponMaxPriceCustomer !: number;

  public maxPrice !: number;

  public allCouponsSystemToClient !: Coupon[];

  public messageCategory: string = "";

  public messageCustomerBuy: string = "";

  public messageCustomerCoupons: string = "";

  public messageCustomerCouponsCategory: string = "";

  public messageCustomerCouponsByMaxPrice: string = "";

  public messageCustomerInfo: string = "";

  public messageCustomerAllCoupons: string = "";

  public messageAdminAddCom: string = "";

  public messageAdminDeleteCom: string = "";

  public messageAdminGetOneCom: string = "";

  public messageAdminGetAllCom: string = "";

  public messageAdminUpdateCom: string = "";

  public messageAdminAddCus: string = "";

  public messageAdminDeleteCus: string = "";

  public messageAdminGetOneCus: string = "";

  public messageAdminGetAllCus: string = "";

  public messageAdminUpdateCus: string = "";

  public messageCompanyAddCoupon: string = "";

  public messageCompanyUpdateCoupon: string = "";

  public messageCompanyDeleteCoupon: string = "";

  public messageCompanyGetAllCoupons: string = "";

  public messageMaxPrice: string = "";

  public messageCompanyInfo = "";
  constructor(private admin: AdminServiceService, private companyService: CompanyServiceService,
    private customerService: CustomerServiceService, public f: FlagsService) { }

  ngOnInit(): void {
  }

  // companies methods :

  addCompany() {
    this.admin.addOneCompany(this.company).subscribe(
      (c) => {
        console.dir(c);
        this.messageAdminAddCom = "This the company tou are added : " + c;
      },
      (e: HttpErrorResponse) => {
        this.messageAdminAddCom = e.error.message;

      }

    );
  }

  deleteCompany() {
    this.admin.deleteOneCompany(this.companyId).subscribe(
      (c) => {
        console.dir(c);
        this.messageAdminDeleteCom = "This company id you are deleted : " + this.companyId;
      },
      (e: HttpErrorResponse) => {
        this.messageAdminDeleteCom = e.error.message;
      }
    );
  }

  getOne() {
    this.admin.getOneCompany(this.companyId).subscribe(
      (c) => {
        this.oneCompany = c;
        this.messageAdminGetOneCom = "This company Id : " + this.companyId + " deteils :";

      },
      (e: HttpErrorResponse) => {
        this.messageAdminGetOneCom = e.error.message;
        ;
      }
    );
  }

  getAllCompanies() {
    this.admin.getAllCompanies().subscribe(
      (arr) => {
        this.companies = arr;
        this.messageAdminGetAllCom = "This is all companies in the system : ";
      },
      (e: HttpErrorResponse) => {
        this.messageAdminGetAllCom = e.error.message;
      }
    );
  }

  updateCompany() {
    this.admin.updateCompany(this.company, this.companyId).subscribe(
      (c) => {
        this.company = c;
        this.messageAdminUpdateCom = "This is your updated company : " + this.company;

      },
      (e: HttpErrorResponse) => {
        this.messageAdminUpdateCom = e.error.message;
      }
    );
  }

  // customer methods :
  addCustomer() {
    this.admin.addCustomer(this.customer).subscribe(
      (c) => {
        console.dir(c);
        this.messageAdminAddCus = "This is your new customer : " + this.customer
      },
      (e: HttpErrorResponse) => {
        this.messageAdminAddCus = e.error.message;
      }
    );
  }


  deleteCustomer() {
    this.admin.deleteOneCustomer(this.customerId).subscribe(
      (c) => {
        console.dir(c);
        this.messageAdminDeleteCus = "This customer id you are deleted : " + this.customerId;
      },
      (e: HttpErrorResponse) => {
        this.messageAdminDeleteCus = e.error.message;
      }
    );
  }


  getOneCustomer() {
    this.admin.getOneCustomer(this.customerId).subscribe(
      (c) => {
        this.oneCustomer = c;
        this.messageAdminGetOneCus = "This customer Id : " + this.customerId + " deteils :";

      },
      (e: HttpErrorResponse) => {
        this.messageAdminGetOneCus = e.error.message;
      }
    );
  }
  getAllCustomers() {
    this.admin.getAllCustomers().subscribe(
      (arr) => {
        this.customers = arr;
        this.messageAdminGetAllCus = "This is all customers in the system : ";
      },
      (e: HttpErrorResponse) => {
        this.messageAdminGetAllCus = e.error.message;
      }
    );
  }

  updateCustomer() {
    this.admin.updateCustomer(this.customer, this.customerId).subscribe(
      (c) => {
        this.customer = c;
        console.dir(c);
        this.messageAdminUpdateCus = "This is your updated customer : " + this.customer;
      },
      (e: HttpErrorResponse) => {
        this.messageAdminUpdateCus = e.error.message;
      }
    );
  }
  /////////////////////////////////////////////////////////////////////////////////
  addCoupon() {
    this.companyService.addCoupon(this.coupon).subscribe(
      (c) => {
        console.dir(c);
        this.messageCompanyAddCoupon = "Coupon Added successfully"
      },
      (e: HttpErrorResponse) => {
        this.messageCompanyAddCoupon = e.error.message;
      }

    );
  }

  getAllCouponsByCategory() {
    this.companyService.getAllCouponsByCategory(this.couponCategory).subscribe(
      (arr) => {
        console.dir(this.couponCategory);
        this.couponsCategory = arr;
        this.messageCategory = " all coupons from " + this.couponCategory;
      },
      (e: HttpErrorResponse) => {
        this.messageCategory = e.error.message;

      }
    );
  }

  updateCoupon() {
    this.companyService.updateCoupon(this.couponId, this.coupon).subscribe(
      (c) => {
        this.coupon = c;
        console.dir(c);
        this.messageCompanyUpdateCoupon = "This is you updated coupon : " + this.coupon;
      },
      (e: HttpErrorResponse) => {
        this.messageCompanyUpdateCoupon = e.error.message;
      }
    );
  }
  deleteCoupon() {
    this.companyService.deleteCoupon(this.couponId).subscribe(
      (c) => {
        console.dir(c);
        this.messageCompanyDeleteCoupon = "coupon with this id is deleted : " + this.couponId;
      },
      (e: HttpErrorResponse) => {
        this.messageCompanyDeleteCoupon = e.error.message;
      }
    );
  }

  getAllCoupons() {
    this.companyService.getAllCoupons().subscribe(
      (arr) => {
        this.coupons = arr;
        this.messageCompanyGetAllCoupons = "This is all coupons in the system : ";
      },
      (e: HttpErrorResponse) => {
        this.messageCompanyGetAllCoupons = e.error.message;
      }
    );
  }

  getAllCouponsByPrice() {
    this.companyService.getAllCouponsByMaxPrice(this.maxPrice).subscribe(
      (arr) => {
        this.couponsPrice = arr;
        this.messageMaxPrice = " all coupons from " + this.maxPrice;
      },
      (e: HttpErrorResponse) => {
        this.messageMaxPrice = e.error.message;
      }
    );
  }

  getInfo() {
    this.companyService.getCompanyInformation().subscribe(
      (c) => {
        this.company = c;
        this.messageCompanyInfo = "";
      },
      (e: HttpErrorResponse) => {
        this.messageCompanyInfo = e.error.message;
      }
    );
  }

  buyACoupon() {
    this.customerService.buyCoupon(this.couponIdToBuy).subscribe(
      (c) => {
        this.messageCustomerBuy = "WOW now you buy this coupon , have FUN";
      },
      (e: HttpErrorResponse) => {
        this.messageCustomerBuy = e.error.message;
      }
    );
  }

  getAllMyCoupons() {
    this.customerService.getAllCoupons().subscribe(
      (arr) => {
        this.customerCoupons = arr;
        this.messageCustomerCoupons = "this is the coupons you have";
      },
      (e: HttpErrorResponse) => {
        this.messageCustomerCoupons = e.error.message;
      }
    );
  }

  getAllCouponsByCategoryOfClient() {
    this.customerService.getAllCouponsByCategory(this.couponCategoryCustomer).subscribe(
      (arr) => {
        console.dir(this.couponCategoryCustomer);
        this.couponsOfCustomerByCategory = arr;
        this.messageCustomerCouponsCategory = " all coupons from " + this.couponCategoryCustomer;
      },
      (e: HttpErrorResponse) => {
        this.messageCustomerCouponsCategory = e.error.message;

      }
    );
  }

  getAllCouponsByPriceOfClient() {
    this.customerService.getAllCouponsByMaxPrice(this.couponMaxPriceCustomer).subscribe(
      (arr) => {
        console.dir(this.couponMaxPriceCustomer);
        this.couponsOfCustomerByMaxPrice = arr;
        this.messageCustomerCouponsByMaxPrice = " Thid is all coupons in this rage you ask for " + this.couponMaxPriceCustomer;

      },
      (e: HttpErrorResponse) => {
        this.messageCustomerCouponsByMaxPrice = e.error.message;

      }
    );
  }

  getInformationOfCustomer() {
    this.customerService.getProfileInformation().subscribe(
      (c) => {
        this.customerInformation = c;
        this.messageCustomerInfo = "this is Yuor client profile";
      },
      (e: HttpErrorResponse) => {
        this.messageCustomerInfo = e.error.message;
      }
    );
  }

  getAllCouponsSystem() {
    this.customerService.getAllCouponsSystem().subscribe(
      (arr) => {
        this.allCouponsSystemToClient = arr;
        this.messageCustomerAllCoupons = "this is all the coupon you can buy";
      },
      (e: HttpErrorResponse) => {
        this.messageCustomerAllCoupons = "Sorry you cunt buy this coupon twis " + e.error.message;
      }
    ); {

    }
  }
}
