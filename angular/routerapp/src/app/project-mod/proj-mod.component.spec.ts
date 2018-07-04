import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjModComponent } from './proj-mod.component';

describe('ProjModComponent', () => {
  let component: ProjModComponent;
  let fixture: ComponentFixture<ProjModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
