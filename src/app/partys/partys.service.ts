import { Injectable } from '@angular/core';
import { Party } from './party.model';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartysService {
  // tslint:disable-next-line: variable-name
  private _partys: Party[] = [];

  getPartys() {
    return this.http.get('http://localhost:8080/partys');
  }

  constructor(private http: HttpClient) { }
/*
  getUser(id: string){
    return {...this.user.find(p => p.id === id)};
  }
  */

  getParty(id: string) {
    return this.http.get('http://localhost:8080/partys/' + id);
  }

  postToFavorits(){
    console.log('Erfolgreich gepostet');
  }

  buyTheTickets(paymentForm: (FormGroup)){
    console.log(paymentForm);
    // HIER Post Request für gekauftes Ticket
  }



}
