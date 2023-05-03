/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */

unitedKingdom = [
  {
    name: "Scotland",
    capital: "Edinburgh",
    population: 5454000,
    touristAttractions: ["Stirling Castle", "Loch Ness"],
  },
  {
    name: "England",
    capital: "London",
    population: 55980000,
  },
  {
    name: "Wales",
    capital: "Swansea",
    population: 3163000,
    touristAttractions: ["Snowdonia"],
  },
  {
    name: "Northern Ireland",
    capital: "Belfast",
    population: 1885000,
    touristAttractions: ["Titanic Museum", "Giant's Causeway"],
  },
];

/**
 * Q1. Add some tourist attractions to England
 */

england = unitedKingdom[1];

england.touristAttractions = ["London Eye", "Angel of the North"];

// console.log(england);

/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

wales = unitedKingdom[2];

wales.capital = "Cardiff";

// console.log(wales);

/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */

northernIreland = unitedKingdom[3];

northernIrelandKeys = Object.keys(northernIreland);

// console.log(northernIrelandKeys);

/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries and print out if it is the biggest, smallest or somewhere in the middle.
 */

scotlandPopulation = unitedKingdom[0].population;
// englandPopulation = england.population;
// walesPopulation = wales.population;
// northernIrelandPopulation = northernIreland.population;
// if (scotlandPopulation > englandPopulation && scotlandPopulation > walesPopulation && scotlandPopulation > northernIrelandPopulation){
// console.log("Scotland has the biggest population");
// }else if (scotlandPopulation < englandPopulation && scotlandPopulation < walesPopulation && scotlandPopulation < northernIrelandPopulation){
// console.log("Scotland has the smallest popoulation");
// }else{
// console.log("Scotland's population is somewhere in the middle");
// }

count = 0;

for (country of unitedKingdom){
  if (scotlandPopulation > country.population){
    count ++;
  }
}
if (count === 0){
  console.log("Scotland has the smallest popoulation");
} else if (count === 3){
  console.log("Scotland has the biggest population");
}else{
  console.log("Scotland's population is somewhere in the middle");
}
