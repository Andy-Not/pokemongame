let attack = 25;
let heal = 10;


const bag = [
    {pokemonName: "pikachu",
        type: "electric",
        maxHealth: 150,
    healthStatus: 100},
    {pokemonName: "squirtle",
        maxHealth: 100,
        type: "water",
        healthStatus: 100}
]

while (true){

    let criticalAttack = Math.floor(Math.random()*11);

    let pikachu = prompt("type attack to attack or heal to heal").toLowerCase();

    while(pikachu !== "attack" && pikachu !== "heal"){
        alert("try again");
        pikachu = prompt("type attack to attack or heal to heal").toLowerCase();
    }

    if(pikachu === "attack"){

        bag[1].healthStatus -= attack;

        if (criticalAttack > 5){
            bag[1].healthStatus -= criticalAttack;
            alert(`you hit a critical attack! for ${criticalAttack} hp`)
        }

        alert(`${bag[0].pokemonName} hit ${bag[1].pokemonName}, ${bag[1].pokemonName}'s health is now ${bag[1].healthStatus}`)

    } else if(bag[0].healthStatus >= bag[0].maxHealth){

        alert(`your health was already ${bag[0].maxHealth}`);

        bag[0].healthStatus = bag[0].maxHealth;

    }else {
        bag[0].healthStatus += heal;

        if (bag[0].healthStatus >= bag[0].maxHealth){

            bag[0].healthStatus = bag[0].maxHealth;

        }

        alert(`you heal for 10 your health is now ${bag[0].healthStatus}`);
    }


    if (bag[1].healthStatus <= 0 || bag[0].healthStatus <= 0){
        break;
    }

    let squirtle = prompt("type attack to attack or heal to heal").toLowerCase();

    while(squirtle !== "attack" && squirtle !== "heal"){
        squirtle = prompt("type attack to attack or heal to heal").toLowerCase();
    }

    if(squirtle === "attack"){

        bag[0].healthStatus -= attack;

        if (criticalAttack > 5){
            bag[0].healthStatus -= criticalAttack;
            alert(`you hit a critical attack! for ${criticalAttack} hp`)
        }

        alert(`${bag[1].pokemonName} hit ${bag[0].pokemonName}, ${bag[0].pokemonName}'s health is now ${bag[0].healthStatus}`)

    } else if(bag[1].healthStatus >= bag[1].maxHealth){

        alert(`your health was already ${bag[1].maxHealth}`);

        bag[1].healthStatus = bag[1].maxHealth;

    }else {
        bag[1].healthStatus += heal;

        if (bag[1].healthStatus >= bag[1].maxHealth){

            bag[1].healthStatus = bag[1].maxHealth;

        }

        alert(`you heal for 10 your health is now ${bag[1].healthStatus}`);
    }

    if (bag[1].healthStatus <= 0 || bag[0].healthStatus <= 0){
        break;
    }
}
alert("GAME OVER")
alert(`pokemon: ${bag[0].pokemonName}  VS  pokemon: ${bag[1].pokemonName}
health: ${bag[0].healthStatus}                    health: ${bag[1].healthStatus}
type: ${bag[0].type}                type: ${bag[1].type}`)

