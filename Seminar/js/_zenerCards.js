export const ZenerCards = [
  {
    id: 1,
    CardName: "Circle",
    image: "./images/ZenerCards/krug.png",
    counter: 0,
  },
  {
    id: 2,
    CardName: "Cross",
    image: "./images/ZenerCards/plus.png",
    counter: 0,
  },
  {
    id: 3,
    CardName: "Waves",
    image: "./images/ZenerCards/val.png",
    counter: 0,
  },
  {
    id: 4,
    CardName: "Square",
    image: "./images/ZenerCards/kvadrat.png",
    counter: 0,
  },
  {
    id: 5,
    CardName: "Star",
    image: "./images/ZenerCards/zvijezda.png",
    counter: 0,
  },
];

export function createZenerCards() {
  for (let i = 0; i < ZenerCards.length; i++) {
    const zenerCard = ZenerCards[i];

    const CardImage = document.createElement("div");

    CardImage.classList.add("class_CardImage");

    CardImage.id = `card-${zenerCard.id}`;

    CardImage.innerHTML = `
    <img class="cardImage_image" src="${zenerCard.image}" alt="${zenerCard.CardName} card" />
    <h3 class="cardImage_title">${zenerCard.CardName}</h3>
    `;

    document.querySelector("#abilities .zenerContainer").appendChild(CardImage);
  }
}
