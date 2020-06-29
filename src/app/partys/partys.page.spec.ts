import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartysPage } from './partys.page';

describe('PartysPage', () => {
  let component: PartysPage;
  let fixture: ComponentFixture<PartysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartysPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
