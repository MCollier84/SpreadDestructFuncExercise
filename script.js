// 1a
const JPDinos = [
    `Velociraptors`,
    `Tyrannosaurus Rex`,
    `Dilophosaurs`,

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

seeCharacters = ({ellieSattler}) => {
    console.log(ellieSattler);
}
seeCharacters(jPCharacters);

