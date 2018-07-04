import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrCompComFirstComponent } from './intr-comp-com-first.component';

describe('IntrCompComFirstComponent', () => {
  let component: IntrCompComFirstComponent;
  let fixture: ComponentFixture<IntrCompComFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrCompComFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrCompComFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
