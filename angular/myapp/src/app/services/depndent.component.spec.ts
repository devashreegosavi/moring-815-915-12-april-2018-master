import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepndentComponent } from './depndent.component';

describe('DepndentComponent', () => {
  let component: DepndentComponent;
  let fixture: ComponentFixture<DepndentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepndentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepndentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
