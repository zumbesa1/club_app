import { Component, OnInit } from '@angular/core';
import { PartysService } from 'src/app/partys/partys.service';
import { Person } from 'src/app/partys/party.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {

  paymentMethod:(string);
  constructor( private partyService:PartysService) { }

  ngOnInit() {}

  buybutton(){
    console.log(this.paymentMethod);
    this.partyService.buyTheTickets(this.paymentMethod);
  }

  

}
