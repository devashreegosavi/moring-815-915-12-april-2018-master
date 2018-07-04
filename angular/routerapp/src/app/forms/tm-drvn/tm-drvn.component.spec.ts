import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmDrvnComponent } from './tm-drvn.component';

describe('TmDrvnComponent', () => {
  let component: TmDrvnComponent;
  let fixture: ComponentFixture<TmDrvnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmDrvnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmDrvnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
