import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Ticket, Category } from '../model/ticket.model';
import { Observable } from 'rxjs';

@Injectable()
export class TicketService {
  header = new HttpHeaders().set('Authorization', 'Konami Code ["Operator", "Technician", "TechnicianManager"]');
  baseUrl:string = 'http://localhost:4200/api/t';
  public listTickets: Observable<Ticket[]>;

  constructor(private http:HttpClient){
    
  }

  public createTicket(ticket:Ticket){
    return this.http.post<any>(this.baseUrl, ticket, {headers: this.header});
  }


  public listTicket(filter:string){
    console.log(filter);
    this.listTickets  =  this.http.get<Ticket[]>(this.baseUrl+ '/tickets', {headers:this.header , params: new HttpParams({fromString:filter})});//, { headers, responseType: 'json'});
    this.listTickets.subscribe((data) => {
      console.log(data);
      //this.listTickets = data;
    });
    return this.listTickets;
  }

  public listCategory() {
    var res = this.http.get<Category[]>(this.baseUrl+ '/categories', {headers: this.header});
    res.subscribe(data => {
      console.log(data);
    });
    return res;
  }
  
  public getTicketById(id: String){
	var res =  this.http.get<Ticket>(this.baseUrl + "/" + id, {headers: this.header});
    res.subscribe((data) => {
      console.log(data);
    });
    return res;
  }
  
  //findAll(Long compagnyId, Long technicianId, Date start, Date end,
  //        Long categoryId, Status statut, Type type, Boolean affected, Priority priority)
  
}