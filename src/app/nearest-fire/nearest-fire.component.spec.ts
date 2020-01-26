import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearestFireComponent } from './nearest-fire.component';

describe('NearestFireComponent', () => {
  let component: NearestFireComponent;
  let fixture: ComponentFixture<NearestFireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearestFireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearestFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
