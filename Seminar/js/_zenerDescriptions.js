export const Descriptions = [
  {
    id: 1,
    DescriptionName: "Zener Card Game Rules",
    image: "./images/ZenerCards/Zener_cards.png",
    text: "Zener cards are cards used to conduct experiments for extrasensory perception. Perceptual psychologist Karl Zener designed the cards in the early 1930s. The Zener cards are a deck of twenty five cards, five of each symbol. The player needs to guess which of the five designs is on the each card.",
  },
];

export function createZenerDescriptions() {
  for (let i = 0; i < Descriptions.length; i++) {
    const Description = Descriptions[i];

    const DescriptionCard = document.createElement("div");

    DescriptionCard.classList.add("class_DescriptionCard");

    DescriptionCard.id = `description-${Description.id}`;

    DescriptionCard.innerHTML = `
    <h3 class="description_title">${Description.DescriptionName}</h3>
    <img class="description_image" src="${Description.image}" alt="${Description.DescriptionName} image" />
    
    <p class="descriptionCard_text">${Description.text}</p>`;

    document
      .querySelector("#abilities .zenerCardGame")
      .appendChild(DescriptionCard);
    //zenerContainer
  }
}
