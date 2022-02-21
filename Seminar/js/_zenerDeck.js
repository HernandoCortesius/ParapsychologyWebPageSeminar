//const SIMBOLS = ["Circle", "Cross", "Waves", "Square", "Star"];

export default class ZenerDeck {
  constructor() {
    this.cards = [];
    this.insertCards();
    this.shuffle();
  }

  insertCards() {
    this.cards = [
      "Circle",
      "Cross",
      "Waves",
      "Square",
      "Star",
      "Circle",
      "Cross",
      "Waves",
      "Square",
      "Star",
      "Circle",
      "Cross",
      "Waves",
      "Square",
      "Star",
      "Circle",
      "Cross",
      "Waves",
      "Square",
      "Star",
      "Circle",
      "Cross",
      "Waves",
      "Square",
      "Star",
    ];
  }

  get numberOfCards() {
    return this.cards.length;
  }

  shuffle() {
    for (let i = 0; i < this.numberOfCards; i++) {
      let j = Math.floor(Math.random() * this.numberOfCards);
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }
}
