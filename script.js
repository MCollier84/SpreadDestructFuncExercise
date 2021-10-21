// 1a
const JPDinos = [
    `Velociraptors`,
    `Tyrannosaurus Rex`,
    `Dilophosaurs`

];

console.log(`========`);

// 1b
function seeDinos(x, ...y){
    console.log(x);
    console.log(y);
    
}
seeDinos(...JPDinos);

console.log(`=======`);

// 2a
const jPCharacters = {
    alanGrant: `Sam Neill`,
    ellieSattler: `Laura Dern`,
    inaMalcolm: `Jeff Goldblum` 
};

console.log(jPCharacters);

console.log(`=======`);

// 2b

seeCharacters = ({ellieSattler}) => {
    console.log(ellieSattler);
}
seeCharacters(jPCharacters);

console.log(`=======`);

// Bonus
// 3a

const jurassicParkMovies = [
        {
          one: "Jurassic Park",
          two: "The Lost World: Jurassic Park",
          three: "Jurassic Park III"
        },
        {
          four: "Jurassic World",
          five: "Jurassic World: Fallen Kingdom",
          six: "Jurassic World: Dominion"
        }
      ];

// 3b
seeJPMovies = ([{one, two, three}, {four, five, six}]) => {
    console.log(one);
   console.log(two);
   console.log(three);
   console.log(four);
   console.log(five);
   console.log(six);
  }
  seeJPMovies(jurassicParkMovies);
  /*
Jurassic Park
The Lost World: Jurassic Park
Jurassic Park III
Jurassic World
Jurassic World: Fallen Kingdom
Jurassic World: Dominion
*/

console.log(`=======`);
// OR

seeJPMovies = ({one, two, three}, {four, five, six}) => {
    console.log(one);
   console.log(two);
   console.log(three);
   console.log(four);
   console.log(five);
   console.log(six);
  }
  seeJPMovies(...jurassicParkMovies);
  