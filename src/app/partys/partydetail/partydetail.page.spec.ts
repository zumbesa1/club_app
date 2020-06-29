import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartydetailPage } from './partydetail.page';

describe('PartydetailPage', () => {
  let component: PartydetailPage;
  let fixture: ComponentFixture<PartydetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartydetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartydetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
