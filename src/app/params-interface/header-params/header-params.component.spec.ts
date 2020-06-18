import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderParamsComponent } from './header-params.component';

describe('HeaderParamsComponent', () => {
  let component: HeaderParamsComponent;
  let fixture: ComponentFixture<HeaderParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
