import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reto3',
  templateUrl: './reto3.component.html',
  styleUrls: ['./reto3.component.css'],
})
export class Reto3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  datos = [
    {
      icon: '../../../../assets/icon-1.svg',
      title: 'seadans',
      text: 'choose a sedan for its affordability and excellent fuel economy. Ideal for crusing in the city or on your next road trip.',
      color: 'var(--color-reto3-1)',
    },
    {
      icon: '../../../../assets/icon-2.svg',
      title: 'suvs',
      text: 'choose a sedan for its affordability and excellent fuel economy. Ideal for crusing in the city or on your next road trip.',
      color: 'var(--color-reto3-2)',
    },
    {
      icon: '../../../../assets/icon-3.svg',
      title: 'luxury',
      text: 'choose a sedan for its affordability and excellent fuel economy. Ideal for crusing in the city or on your next road trip.',
      color: 'var(--color-reto3-3)',
    },
  ];
}
