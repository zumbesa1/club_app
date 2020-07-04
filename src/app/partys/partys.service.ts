import { Injectable } from '@angular/core';
import { Party, Club, User, Favorites } from './party.model';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PartysService {
  // tslint:disable-next-line: variable-name
  private _partys: Party[] = [
    new Party(
      'p1',
      '09.07.2020',
      'Smooth and Sexy',
      new Club(
        'c1',
        'Hiltl',
        null,
        null,
      ),
      'https://diginights.com/uploads/images/event/2017/07/15/2017-07-15-smooth-n-sexy-at-hiltl-club-sa-15-juli-2017-hiltl-club/headline_image-default-1.jpg',
      'dj kitra',
      'Hip Hop, Club Music, R&B',
      'in the daytime is best',
      30.00,
      'Argjend Baftiji'
    ),
    new Party(
      'p2',
      '15.07.2020',
      'Snapback',
      new Club(
        'c2',
        'Jade',
        null,
        null,
      ),
      'https://jade.ch/wp-content/uploads/2017/07/99A6349-1100x756.jpg',
      'dj balado',
      'Latino, Reggeaton',
      'as never before',
      30.00,
      'Luca'
    ),
    new Party(
      'p3',
      '13.07.2020',
      'Silk',
      new Club(
        'c3',
        'Plaza',
        null,
        null,
      ),
      'https://jade.ch/wp-content/uploads/2016/08/jade_club_zuerich_7-jahre-jade-text-01-1024x672.jpg',
      'dj domino',
      'Goa, Techno',
      'today is not tomorrow',
      25.00,
      'Lucas'
    ),
    new Party(
      'p4',
      '03.07.2020',
      'Lemon Dayrave',
      new Club(
        'c4',
        'Hard One',
        null,
        null,
      ),
      'https://media-3.virtualnights.com/media/EventPicture2018/350735/f42211eb29011f0d9664f11c83050822-321-159-1/350735.jpg',
      'dj summer',
      'Goa, Techno',
      'The night of your life',
      25.00,
      'Sala'
    ),
    new Party(
      'p5',
      '07.07.2020',
      'Blueprint',
      new Club(
        'c5',
        'Jade',
        null,
        null,
      ),
      'https://jade.ch/wp-content/uploads/2017/09/99A7345-1100x756.jpg',
      'dj santino',
      'Goa, Techno',
      'lets play',
      35.00,
      'Nico'
    ),
    new Party(
      'p6',
      '10.07.2020',
      'Smooth',
      new Club(
        'c6',
        'Hive',
        null,
        null,
      ),
      'https://static.az-cdn.ch/__ip/EWII0UfYNeZxj6uObORd452m3z0/890a6fdee6d5f69351ebff619fa7bf4da96301a8/remote.adjust.rotate=0&remote.size.w=3200&remote.size.h=2136&local.crop.h=1800&local.crop.w=3200&local.crop.x=0&local.crop.y=154&r=1,n-large-16x9',
      'dj valentino',
      'Techno, House',
      'The day of your life',
      20.00,
      'Max'
    )
  ];
  private user: User[] = [
    new User(
      'u1',
      'Mando',
      'Musterlos',
      'salahudin.z@hotmail.com',
      '0791362832',
      'Knüsslistrasse 3, 8004 Zürich',
      8004,
      'asdf',
      new Favorites(
        'f1',
        'Argjend'
      ),
    )
  ];

  get partys() {
    return [...this._partys];
  }

  private partysUrl = 'https://localhost:8080/partys';
  constructor(private http: HttpClient) { }

  getUser(id: string){
    return {...this.user.find(p => p.id === id)};
  }

  getParty(id: string) {
    return {...this._partys.find(p => p.id === id)};
  }

  postToFavorits() {
    return new Promise (resolve => {
      this.http.get(`${this.partysUrl}`).subscribe(data => {
        resolve(data); },
        err => {
          console.log(err);
        });
    });

    // Hier POST Request für Favorisierter Organizer

  }

  buyTheTickets(paymentForm: (FormGroup)){
    console.log(paymentForm);
    // HIER Post Request für gekauftes Ticket
  }



}
