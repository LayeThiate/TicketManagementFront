import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from '../model/company.model';
import { Observable } from 'rxjs';

@Injectable()
export class CompanyService {

  companies:Observable<Company[]>;

  header = new HttpHeaders().set('Authorization', 'Konami Code ["Administrator"]');
  baseUrl:string = 'http://localhost:4200/api/c';

  constructor(private http:HttpClient) { }

  public createCompany(company:Company){
    return this.http.post<any>(this.baseUrl, company, {headers: this.header});
  }

  public listAllCompanies(){
    this.companies = this.http.get<Company[]>(this.baseUrl, {headers:this.header });//, { headers, responseType: 'json'});
    this.companies.subscribe((data) => {
      console.log(data);
      //this.listTickets = data;
    });
  }
}
