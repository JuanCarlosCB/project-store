import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippinginformationComponent } from './shippinginformation.component';

describe('ShippinginformationComponent', () => {
  let component: ShippinginformationComponent;
  let fixture: ComponentFixture<ShippinginformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippinginformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippinginformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
