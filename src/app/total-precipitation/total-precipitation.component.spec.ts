import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPrecipitationComponent } from './total-precipitation.component';

describe('TotalPrecipitationComponent', () => {
  let component: TotalPrecipitationComponent;
  let fixture: ComponentFixture<TotalPrecipitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalPrecipitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPrecipitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
