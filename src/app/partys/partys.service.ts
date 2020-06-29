import { Injectable } from '@angular/core';
import { Party, DJs } from './party.model';

@Injectable({
  providedIn: 'root'
})
export class PartysService {
  private _partys: Party[] = [
    new Party(
      'p6',
      '09.07.2020',
      'Smooth and Sexy',
      'Hiltl, Club Music, R&B',
      'https://diginights.com/uploads/images/event/2017/07/15/2017-07-15-smooth-n-sexy-at-hiltl-club-sa-15-juli-2017-hiltl-club/headline_image-default-1.jpg',
      'dj kitra',
      'Hip Hop, R&B',
      'in the daytime is best',
      30.00,
    ),
    new Party(
      'p5',
      '15.07.2020',
      'Snapback',
      'Jade',
      'https://jade.ch/wp-content/uploads/2017/07/99A6349-1100x756.jpg',
      'dj balado',
      'Latino, Reggeaton',
      'as never before',
      30.00,
    ),
    new Party(
      'p3',
      '13.07.2020',
      'Silk',
      'Plaza',
      'https://jade.ch/wp-content/uploads/2016/08/jade_club_zuerich_7-jahre-jade-text-01-1024x672.jpg',
      'dj domino',
      'Goa, Techno',
      'today is not tomorrow',
      25.00,
    ),
    new Party(
      'p1',
      '03.07.2020',
      'Lemon Dayrave',
      'Hard One',
      'https://media-3.virtualnights.com/media/EventPicture2018/350735/f42211eb29011f0d9664f11c83050822-321-159-1/350735.jpg',
      'dj summer',
      'Goa, Techno',
      'The night of your life',
      25.00,
    ),
    new Party(
      'p4',
      '07.07.2020',
      'Blueprint',
      'Jade',
      'https://jade.ch/wp-content/uploads/2017/09/99A7345-1100x756.jpg',
      'dj santino',
      'Goa, Techno',
      'lets play',
      35.00,
    ),
    new Party(
      'p2',
      '10.07.2020',
      'Smooth',
      'Hive',
      'https://static.az-cdn.ch/__ip/EWII0UfYNeZxj6uObORd452m3z0/890a6fdee6d5f69351ebff619fa7bf4da96301a8/remote.adjust.rotate=0&remote.size.w=3200&remote.size.h=2136&local.crop.h=1800&local.crop.w=3200&local.crop.x=0&local.crop.y=154&r=1,n-large-16x9',
      'dj valentino',
      '',
      'The day of your life',
      20.00,
    )
  ];

  get partys() {
    return [...this._partys];
  }

  constructor() { }

  getParty(id: string) {
    return {...this._partys.find(p => p.id === id)};
  }




}
