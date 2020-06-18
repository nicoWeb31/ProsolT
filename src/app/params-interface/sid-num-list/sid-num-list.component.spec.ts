import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidNumListComponent } from './sid-num-list.component';

describe('SidNumListComponent', () => {
  let component: SidNumListComponent;
  let fixture: ComponentFixture<SidNumListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidNumListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidNumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
