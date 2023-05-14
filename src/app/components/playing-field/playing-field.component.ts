import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-playing-field',
  templateUrl: './playing-field.component.html',
  styleUrls: ['./playing-field.component.scss']
})
export class PlayingFieldComponent implements OnInit {
  gridSlots = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
  @Output() cards: number[] = []
  constructor() { }

  ngOnInit(): void {
    this.populateCards(13)
  }

  populateCards(maxValue: number) {
    for (let i = 1; i <= maxValue; i++) {
      this.cards.push(i);
      this.cards.push(i);
      this.cards.push(i);
      this.cards.push(i);
    }
  }



}
