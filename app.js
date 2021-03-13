let inGame = true;
let attack = 20;
let criticalAttack = 10;

const bag = [
    {pokemonName: "pikachu",
        type: "electric",
    healthStatus: 100},
    {pokemonName: "squirtle",
        type: "water",
        healthStatus: 100}
]
while (inGame === true){
    if (bag[0].healthStatus <= 0 || bag[1].healthStatus <= 0){
        alert("GAME OVER")
        inGame = false;
    }
}
alert(`pokemon: ${bag[0].pokemonName}  VS  pokemon: ${bag[1].pokemonName}
health: ${bag[0].healthStatus}                    health: ${bag[1].healthStatus}
type: ${bag[0].type}                 type: ${bag[1].type}`)

