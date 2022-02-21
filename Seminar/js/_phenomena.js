export const phenomena = [
  {
    id: 0,
    Phenomenon: "Remote Viewing",
    image: "./images/Fenomeni/remote_viewing.jpg",
    description:
      "From the early 1970s to mid-1990s, the American federal government funded a top-secret project to investigate the potential military applications of extrasensory perception. Labelled ‘Project Star Gate’, the research program was led by a physicist named Edwin May from the Stanford Research Institute (SRI). Project Star Gate focused on ‘remote viewing’ – the claim to be able to obtain information psychically about remote geographical locations.",
  },
  {
    id: 1,
    Phenomenon: "Out-of-body experience",
    image: "./images/Fenomeni/Out-of-body_experience.png",
    description:
      "During an out-of-body experience (OBE), a person usually feels as if they have floated out of their body and are viewing their surroundings from a different perspective, and they may see their own physical body.",
  },
  {
    id: 2,
    Phenomenon: "Near death experience",
    image: "./images/Fenomeni/Near_death_Experience.jpg",
    description:
      "Near-death experiences (NDEs) are similar to OBEs in that they can include a sensation of leaving the physical body, but are typically more elaborate and emotionally intense experiences that include feelings of bliss and serenity, of travelling through a tunnel towards a bright light, encountering divine beings, and even meeting deceased loved ones.",
  },
  {
    id: 3,
    Phenomenon: "Hauntings and apparitions",
    image: "./images/Fenomeni/apparition.jpg",
    description:
      "Apparitional experience is an anomalous experience characterized by the apparent perception of either a living being or an inanimate object without there being any material stimulus for such a perception. Hundreds of people have experienced a diverse range of strange phenomena at certain haunted locations, including seeing apparitions, sensing a presence, smelling strange odors, and hearing odd sounds.",
  },
  {
    id: 4,
    Phenomenon: "Telepathy and clairvoyance",
    image: "./images/Fenomeni/telepathy.jpg",
    description:
      "Telepathy is the ability to read another person’s thoughts. Clairvoyance is the ability to detect unknown information (for instance, being able to describe the buildings in a street you’ve never visited).",
  },
];

export function createPhenomena() {
  for (let i = 0; i < phenomena.length; i++) {
    const fenomen = phenomena[i];

    const phenomenonArticle = document.createElement("article");

    phenomenonArticle.classList.add("class_Phenomenon_Article");

    phenomenonArticle.id = `phenomenon-${fenomen.id}`;

    phenomenonArticle.innerHTML = `
    <img class="phenomenon_image" src="${fenomen.image}" alt="${fenomen.Phenomenon} phenomenon" />
    <h3 class="phenomenon_title">${fenomen.Phenomenon}</h3>
    <p class="phenomenon__description">${fenomen.description}</p>`;

    document
      .querySelector("#phenomena .phenomenaContainer")
      .appendChild(phenomenonArticle);
  }
}
