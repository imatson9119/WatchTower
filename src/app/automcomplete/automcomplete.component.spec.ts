import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomcompleteComponent } from './automcomplete.component';

describe('AutomcompleteComponent', () => {
  let component: AutomcompleteComponent;
  let fixture: ComponentFixture<AutomcompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomcompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomcompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
