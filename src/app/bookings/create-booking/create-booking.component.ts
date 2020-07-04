import { Component, OnInit } from '@angular/core';
import { PartysService } from 'src/app/partys/partys.service';
import { Party, User } from 'src/app/partys/party.model';
import { NgForm, FormGroup, Validators, FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  party: Party;
  user: User = new User();
  form: FormGroup;
  paymentMethod: (string);

  constructor(private partyService: PartysService, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      lastName: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      eMail: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      phoneNumber:  new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      })
    });
  }

  buybutton() {
  }
  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

}
