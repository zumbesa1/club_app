import { Component, OnInit } from '@angular/core';
import { PartysService } from 'src/app/partys/partys.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Party, Person, User } from 'src/app/partys/party.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  party: Party;
  person: Person;
  user: User;
  paymentForm: FormGroup;
  paymentMethod: (string);

  constructor(private partyService: PartysService, public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
      firstName: [this.user.firstName, Validators.compose([Validators.required])],
      lastName: [this.user.lastName, Validators.compose([Validators.required])],
      eMail: [this.user.eMail, Validators.compose([Validators.required])],
      telNumber: [this.user.phoneNumber, Validators.compose([Validators.required])]
    });
  }

  buybutton() {
    this.partyService.buyTheTickets(this.paymentForm);
  }
}
