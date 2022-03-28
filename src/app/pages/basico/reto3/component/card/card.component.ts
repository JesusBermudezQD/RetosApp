import { Component, Input, OnInit } from '@angular/core';
interface data {
  icon: string;
  title: string;
  text: string;
  color: string;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() data!: data;
  @Input() index!: number;
  constructor() {}

  ngOnInit(): void {
    console.log(this.index);
  }
}
