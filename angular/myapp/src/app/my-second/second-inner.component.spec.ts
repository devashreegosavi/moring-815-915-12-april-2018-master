import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondInnerComponent } from './second-inner.component';

describe('SecondInnerComponent', () => {
  let component: SecondInnerComponent;
  let fixture: ComponentFixture<SecondInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
