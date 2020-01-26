import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TwoDPage } from './twoD.page';

describe('TwoDPage', () => {
  let component: TwoDPage;
  let fixture: ComponentFixture<TwoDPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoDPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TwoDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
