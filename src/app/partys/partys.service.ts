import { Injectable } from '@angular/core';
import { Party } from './party.model';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartysService {
  // tslint:disable-next-line: variable-name
  private _partys: Party[] = []
    /*new Party(
      'p1',
      '09.07.2020',
      'Smooth and Sexy',
      'https://diginights.com/uploads/images/event/2017/07/15/2017-07-15-smooth-n-sexy-at-hiltl-club-sa-15-juli-2017-hiltl-club/headline_image-default-1.jpg',
      'in the daytime is best',
      30.00,
      new Club(
        'c1',
        'Hiltl',
        null,
        null,
      ),
      new Music(
        'm1',
        'Hip Hop, Club Music, R&B'
      ),
      new DJ(
        'dj1',
        'dj kitra'
      ),
      new Organizer(
        'o1',
        'Argjend',
        'Baftiji'
      )
    ),
    new Party(
      'p2',
      '15.07.2020',
      'Snapback',
      'https://jade.ch/wp-content/uploads/2017/07/99A6349-1100x756.jpg',
      'as never before',
      30.00,
      new Club(
        'c2',
        'Jade',
        null,
        null,
      ),
      new Music(
        'm2',
        'Latino, Reggeaton',
      ),
      new DJ(
        'dj2',
        'dj balado',
      ),
      new Organizer(
        'o2',
        'Luca',
        'Kaiser'
      )
    ),
    new Party(
      'p3',
      '13.07.2020',
      'Silk',
      'https://jade.ch/wp-content/uploads/2016/08/jade_club_zuerich_7-jahre-jade-text-01-1024x672.jpg',
      'today is not tomorrow',
      25.00,
      new Club(
        'c3',
        'Plaza',
        null,
        null,
      ),
      new Music(
        'm3',
        'Goa, Techno',
      ),
      new DJ(
        'dj3',
        'dj domino',
      ),
      new Organizer(
        'o3',
        'Lucas',
        'Brunner'
      )
    ),
    new Party(
      'p4',
      '03.07.2020',
      'Lemon Dayrave',
      'https://media-3.virtualnights.com/media/EventPicture2018/350735/f42211eb29011f0d9664f11c83050822-321-159-1/350735.jpg',
      'The night of your life',
      25.00,
      new Club(
        'c4',
        'Hard One',
        null,
        null,
      ),
      new Music(
        'm3',
        'Goa, Techno',
      ),
      new DJ(
        'dj4',
        'dj summer',
      ),
      new Organizer(
        'o4',
        'Sala',
        'Zumberi'
      )
    ),
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
*/
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
    //HIER Post Request für gekauftes Ticket
  }



}
