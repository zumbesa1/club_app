import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PartysService } from '../partys.service';
import { Party } from '../party.model';
import { CreateBookingPage } from 'src/app/bookings/create-booking/create-booking.Page';

@Component({
  selector: 'app-party-detail',
  templateUrl: './party-detail.page.html',
  styleUrls: ['./party-detail.page.scss'],
})
export class PartyDetailPage implements OnInit {
  party: Party;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private partyService: PartysService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('partyId')) {
        this.navCtrl.navigateBack('/tabs/partys');
        return;
      }
      this.party = this.partyService.getParty(paramMap.get('partyId'));
    });
  }

  onBookPlace() {
    this.modalCtrl.create({
      component: CreateBookingPage,
       componentProps: { selectedPlace: this.party }
      }).then
      (modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then(resultData => {
      console.log(resultData, resultData.role);
      if (resultData.role === 'confirm') {
        console.log('Booked!');
      }
    });
  }

  addToFavorites(){
    this.partyService.postToFavorits();
  }

}
