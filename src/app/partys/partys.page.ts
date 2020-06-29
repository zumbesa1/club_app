import { Component, OnInit } from '@angular/core';
import { Party } from './party.model';
import { PartysService } from './partys.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-partys',
  templateUrl: './partys.page.html',
  styleUrls: ['./partys.page.scss'],
})
export class PartysPage implements OnInit {
  loadedPartys: Party[];
  constructor(private partyService: PartysService, private menuCtrl: MenuController) { }

  ngOnInit() {
    this.loadedPartys = this.partyService.partys;
  }

  onOpenMenu() {
    this.menuCtrl.toggle();
  }

}
