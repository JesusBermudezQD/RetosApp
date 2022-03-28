import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reto4Component } from './reto4.component';

describe('Reto4Component', () => {
  let component: Reto4Component;
  let fixture: ComponentFixture<Reto4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reto4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reto4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
