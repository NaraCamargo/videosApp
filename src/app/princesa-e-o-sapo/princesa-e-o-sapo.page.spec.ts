import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrincesaEOSapoPage } from './princesa-e-o-sapo.page';

describe('PrincesaEOSapoPage', () => {
  let component: PrincesaEOSapoPage;
  let fixture: ComponentFixture<PrincesaEOSapoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincesaEOSapoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrincesaEOSapoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
