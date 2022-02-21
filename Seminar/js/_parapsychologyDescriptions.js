export const Descriptions = [
  {
    id: 1,
    //DescriptionName: "Parapsyhology",
    image: "./images/parapsychology.jpg",
    text: "Parapsychology is the scientific study of experiences which, if they are as they seem to be, are in principle outside the realm of human capabilities as presently conceived by conventional scientists. Familiar examples of anomalous phenomena are experiences that seemingly involve extrasensory perception and apparitions.",
  },
];

export function createParapsychologyDescriptions() {
  for (let i = 0; i < Descriptions.length; i++) {
    const Description = Descriptions[i];

    const DescriptionCard = document.createElement("div");

    DescriptionCard.classList.add("class_DescriptionCard");

    DescriptionCard.id = `description-${Description.id}`;

    DescriptionCard.innerHTML = `
    <img class="description_image" src="${Description.image}" alt="${Description.DescriptionName} image" />
    
    <p class="descriptionCard_text">${Description.text}</p>`;

    document
      .querySelector("#introduction .IntroContainer")
      .appendChild(DescriptionCard);
  }
}
