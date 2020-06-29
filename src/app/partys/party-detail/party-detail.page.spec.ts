import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartyDetailPage } from './party-detail.page';

describe('PartyDetailPage', () => {
  let component: PartyDetailPage;
  let fixture: ComponentFixture<PartyDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartyDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
