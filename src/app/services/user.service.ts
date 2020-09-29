import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = 'http://localhost:4200/ws/users';

  constructor(private http:HttpClient) { }

  public createUser(user:User){
    return this.http.post<any>(this.baseUrl+ '/create-user', user);
  }

  public getUser(){
    //const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    const res =  this.http.get<any>(this.baseUrl+ '/1');//, { headers, responseType: 'json'});
    user:User;
    res.subscribe((data) => {
      console.log(data);
      
    });
    return res;
  }
}
