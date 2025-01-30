const homeTeam = "Bulls";
const homeCity = "Chicago";
let awayTeam = "Lakers";
let departureCity = "Los Angeles";
let transportMode = "plane";
let travelTime = 3;
let gameTime = 11;
let minDepartureTime = gameTime - travelTime;

console.log(`The ${departureCity} ${awayTeam} have a game against the ${homeCity} ${homeTeam} at ${gameTime} o'clock.`);
console.log(`The ${awayTeam} manager wants the team to travel to the game by ${transportMode}, which will take ${travelTime} hours.`);
console.log(`The ${awayTeam} must leave by ${minDepartureTime} o'clock.`);

awayTeam = prompt("Who is playing?");
departureCity = prompt("What city are they from?");
transportMode = prompt("What vehicle do they want to travel in?");
travelTime = prompt(`How many hours does it take to get from ${departureCity} to ${homeCity} by ${transportMode}?`);
gameTime = prompt("What time is the game?");
minDepartureTime = gameTime - travelTime;

console.log(`The ${departureCity} ${awayTeam} have a game against the ${homeCity} ${homeTeam} at ${gameTime} o'clock.`);
console.log(`The ${awayTeam} manager wants the team to travel to the game by ${transportMode}, which will take ${travelTime} hours.`);
console.log(`The ${awayTeam} must leave by ${minDepartureTime} o'clock.`);