const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 9000;

app.use(cors());

let cards = {
  "dark magician": {
    cardtype: "Monster",
    types: "Spellcaster/Normal",
    attribute: "DARK",
    level: 7,
    attack: 2500,
    defense: 2100,
    description: "The ultimate wizard in terms of attack and defense",
  },
  "blue-eyes white dragon": {
    cardtype: "Monster",
    types: "Dragon/Normal",
    attribute: "LIGHT",
    level: 8,
    attack: 3000,
    defense: 2500,
    description:
      "The legendary dragon is a powerful engine of destruction.  Virtually invinsible, very few have faced this awesome creature and lived to tell the tale.",
  },
  raigeki: {
    cardtype: "Monster",
    types: "Dragon/Normal",
    attribute: "DARK",
    level: 7,
    attack: 2400,
    defense: 2000,
    description: "A ferocious dragon with a deadly attack.",
  },
  unknown: {
    cardtype: "Unknown",
    types: "Unknown",
    attribute: "Unknown",
    level: "Unknown",
    attack: "Unknown",
    defense: "Unknown",
    description: "Unknown",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html"); //__dirname = root
});

app.get("/api/:cardName", (request, response) => {
  const cardName = request.params.cardName.toLowerCase(); //params takes the parameter called 'name'
  if (cards[cardName]) {
    response.json(cards[cardName]);
  } else {
    response.json(cards["unknown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  // added process.env.PORT so that Heroku can use their PORT
  console.log(`Server running on port ${PORT}`);
});
