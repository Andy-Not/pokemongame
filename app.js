let health = 100;
let inGame = true;
let attack = 20;
let criticalAttack = 10;

const bag = [
    {pokemonName: "pikachu",
        type: "electric",
    healthStatus: health},
    {pokemonName: "squirtle",
        type: "water",
        healthStatus: health}
]

alert(`pokemon: ${bag[0].pokemonName}  VS  pokemon: ${bag[1].pokemonName}
health: ${bag[0].healthStatus}                    health: ${bag[1].healthStatus}
type: ${bag[0].type}                 type: ${bag[1].type}`)

