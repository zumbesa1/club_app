import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PartysService } from '../partys.service';
import { Party } from '../party.model';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { Map, tileLayer, marker, polyline } from 'leaflet';

@Component({
  selector: 'app-party-detail',
  templateUrl: './party-detail.page.html',
  styleUrls: ['./party-detail.page.scss'],
})
export class PartyDetailPage implements OnInit {
  party: Party;
  map: Map;
  marker: any;
  latLong = [];
  
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private partyService: PartysService,
    private modalCtrl: ModalController,
    private geolocation: Geolocation) { }

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
      component: CreateBookingComponent,
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

  ionViewDidEnter() {
    this.showMap();
  }

  showMap() {
    this.map = new Map('myMap').setView([8.8527288, 47.2004169], 10);
    tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(this.map);
  }

  getPositions() {
    this.geolocation.getCurrentPosition({
      enableHighAccuracy: true
    }).then((res) => {
      return this.latLong = [
        res.coords.latitude,
        res.coords.longitude
      ]
    }).then((latlng) => {
      if (this.marker) {
        this.marker.remove();
        this.showMarker(latlng);
      } else {
        this.showMarker(latlng);
      };
    });
  }

  showMarker(latLong) {
    this.marker = marker(latLong, 15);
    this.marker.addTo(this.map)
    .bindPopup('Hey, I\'m Here');
    this.map.setView(latLong);
  }

}


