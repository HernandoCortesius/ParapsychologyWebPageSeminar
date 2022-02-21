import { ZenerCards } from "./_zenerCards";
import ZenerDeck from "./_zenerDeck.js";

export function PlayGame() {
  const deck = new ZenerDeck();

  deck.shuffle();
  let theCard;

  theCard = deck.cards[0];

  let guessCounter = 0;

  document.getElementById("card-1").addEventListener("click", CardClicked);
  document.getElementById("card-2").addEventListener("click", CardClicked);
  document.getElementById("card-3").addEventListener("click", CardClicked);
  document.getElementById("card-4").addEventListener("click", CardClicked);
  document.getElementById("card-5").addEventListener("click", CardClicked);

  function CardClicked() {
    deck.shuffle();
    theCard = deck.cards[0];
    document.getElementById("TheCard").innerText = theCard;

    guessCounter++;

    document.getElementById("NumberOfGuesses").innerText = guessCounter;
  }
}
