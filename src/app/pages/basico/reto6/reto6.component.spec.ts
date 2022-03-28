import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reto6Component } from './reto6.component';

describe('Reto6Component', () => {
  let component: Reto6Component;
  let fixture: ComponentFixture<Reto6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reto6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reto6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
