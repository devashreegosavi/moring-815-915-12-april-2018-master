import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColPnlComponent } from './col-pnl.component';

describe('ColPnlComponent', () => {
  let component: ColPnlComponent;
  let fixture: ComponentFixture<ColPnlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColPnlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColPnlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
