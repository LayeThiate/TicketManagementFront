import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Address } from '../model/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  baseUrl: string = 'http://localhost:4200/test/save-address';

  constructor(private http:HttpClient) { }

  public createAddress(a:Address){
    return this.http.post<any>(this.baseUrl, a);
  }

  public okok (){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    const ok =  this.http.get<any>('http://localhost:4200/test/address/1', { headers, responseType: 'json'});
    ok.subscribe((data) => {
      console.log(data);
    });
    return ok;
  }
}
