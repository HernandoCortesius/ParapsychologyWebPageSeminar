// Uvozimo funkcije iz ostalih JavaScript dokumenata

import { createPhenomena } from "./_phenomena.js";
import { createZenerDescriptions } from "./_zenerDescriptions.js";
import { createZenerCards } from "./_zenerCards";
import { createParapsychologyDescriptions } from "./_parapsychologyDescriptions.js";
import { PlayGame } from "./_zenerGame.js";

createParapsychologyDescriptions();
createPhenomena();
createZenerDescriptions();
createZenerCards();
PlayGame();
