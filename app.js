let inGame = true;
let attack = 25;


const bag = [
    {pokemonName: "pikachu",
        type: "electric",
    healthStatus: 100},
    {pokemonName: "squirtle",
        type: "water",
        healthStatus: 100}
]
while (inGame === true){

    let criticalAttack = Math.floor(Math.random()*11);

    let pikachu = prompt("type attack to attack").toLowerCase();

    while(pikachu !== "attack"){
        pikachu = prompt("type attack to attack").toLowerCase();
    }

        bag[1].healthStatus -= attack;

    if (criticalAttack > 5){
        bag[1].healthStatus -= criticalAttack;
        alert(`you hit a critical attack! for ${criticalAttack} hp`)
    }

    alert(`${bag[0].pokemonName} hit ${bag[1].pokemonName}, ${bag[1].pokemonName}'s health is now ${bag[1].healthStatus}`)

    if (bag[1].healthStatus <= 0 || bag[0].healthStatus <= 0){
        break;
    }

    let squirtle = prompt("type attack to attack").toLowerCase();

    while(squirtle !== "attack"){
        squirtle = prompt("type attack to attack").toLowerCase();
    }

        bag[0].healthStatus -= attack;

    alert(`${bag[1].pokemonName} hit ${bag[0].pokemonName}, ${bag[0].pokemonName}'s health is now ${bag[0].healthStatus}`)

    if (bag[1].healthStatus <= 0 || bag[0].healthStatus <= 0){
        break;
    }
}
alert("GAME OVER")
alert(`pokemon: ${bag[0].pokemonName}  VS  pokemon: ${bag[1].pokemonName}
health: ${bag[0].healthStatus}                    health: ${bag[1].healthStatus}
type: ${bag[0].type}                type: ${bag[1].type}`)

