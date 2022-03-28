import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reto3Component } from './reto3.component';

describe('Reto3Component', () => {
  let component: Reto3Component;
  let fixture: ComponentFixture<Reto3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reto3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reto3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
