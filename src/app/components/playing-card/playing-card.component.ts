import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-playing-card',
  templateUrl: './playing-card.component.html',
  styleUrls: ['./playing-card.component.scss']
})
export class PlayingCardComponent implements OnInit {
  card: number[] = []
  selected = false
  @Input() cards: number[] = []

  constructor() { }

  ngOnInit(): void {
    this.drawCard(this.cards)
    console.log(this.cards)
  }

  drawCard(cards: number[]) {
    const randomIndex = Math.floor(Math.random() * cards.length)
    this.card = cards.splice(randomIndex, 1)
  }

  selectCard() {
    this.selected = true
    console.log(this.card)
  }
}
