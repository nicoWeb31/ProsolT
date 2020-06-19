import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAccComponent } from './gestion-acc.component';

describe('GestionAccComponent', () => {
  let component: GestionAccComponent;
  let fixture: ComponentFixture<GestionAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
