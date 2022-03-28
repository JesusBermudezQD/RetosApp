import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reto5Component } from './reto5.component';

describe('Reto5Component', () => {
  let component: Reto5Component;
  let fixture: ComponentFixture<Reto5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reto5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reto5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
