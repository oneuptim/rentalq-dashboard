import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalChecksComponent } from './rental-checks.component';

describe('DetailsComponent', () => {
  let component: RentalChecksComponent;
  let fixture: ComponentFixture<RentalChecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalChecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
