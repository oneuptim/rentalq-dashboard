import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantChecksComponent } from './tenant-checks.component';

describe('DetailsComponent', () => {
  let component: TenantChecksComponent;
  let fixture: ComponentFixture<TenantChecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantChecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
