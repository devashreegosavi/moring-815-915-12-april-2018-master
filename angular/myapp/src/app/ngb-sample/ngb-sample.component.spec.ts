import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbSampleComponent } from './ngb-sample.component';

describe('NgbSampleComponent', () => {
  let component: NgbSampleComponent;
  let fixture: ComponentFixture<NgbSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
