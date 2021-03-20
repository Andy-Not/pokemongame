function getCritical(enemy, num){

    let criticalAttack = Math.floor(Math.random()*num);

    if (criticalAttack > 6){
        bag[enemy].healthStatus -= criticalAttack;
        alert(`you hit a critical attack! for ${criticalAttack} hp`);
    }
}
function checkGame(){
    if (bag[1].healthStatus <= 0 || bag[0].healthStatus <= 0){
       return true;
    }
}
function neutralAttack(enemy){
    let attack = 25;
    let missed = Math.floor(Math.random()*11);
    if (missed > 3){
    bag[enemy].healthStatus -= attack;
}else if(missed <= 3){
        return "missed";
    }
}
function healPokemon(pokemonNum){
    let heal = 10;
    bag[pokemonNum].healthStatus += heal;
}

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

    let pikachu = prompt("type attack to attack or heal to heal").toLowerCase();

    while(pikachu !== "attack" && pikachu !== "heal"){
        alert("try again");
        pikachu = prompt("type attack to attack or heal to heal").toLowerCase();
    }

    if(pikachu === "attack"){
        if (neutralAttack(1)!== "missed"){
            neutralAttack(1);
            getCritical(1, 15);
            alert(`${bag[0].pokemonName} hit ${bag[1].pokemonName}, ${bag[1].pokemonName}'s health is now ${bag[1].healthStatus}`);
        }else if(neutralAttack(1) === "missed"){
            alert("attack missed");
        }
    } else if(bag[0].healthStatus >= bag[0].maxHealth){
        alert(`your health was already ${bag[0].maxHealth}`);
        bag[0].healthStatus = bag[0].maxHealth;
    }else{
        healPokemon(0)
        if (bag[0].healthStatus >= bag[0].maxHealth){
                bag[0].healthStatus = bag[0].maxHealth;
        }

        alert(`you heal for 10 your health is now ${bag[0].healthStatus}`);
    }

    if(checkGame()){
        break;
    }

    alert("squirtles turn");

    let autoMove = Math.floor(Math.random()*11);

    if (autoMove >= 4){
        neutralAttack(0);
        getCritical(0, 7);
        alert(`${bag[1].pokemonName} hit ${bag[0].pokemonName}, ${bag[0].pokemonName}'s health is now ${bag[0].healthStatus}`);
    }else if(autoMove < 4 && bag[1].healthStatus < bag[1].maxHealth){
        healPokemon(1);
        alert(`squirtle healed for 10hp squirtle's health is now ${bag[1].healthStatus}`);
    }else {
        neutralAttack(0);
        getCritical(0, 7);
        alert("squirtle missed!");
    }

    if(checkGame()){
        break;
    }
}
alert("GAME OVER");
alert(`pokemon: ${bag[0].pokemonName}  VS  pokemon: ${bag[1].pokemonName}
health: ${bag[0].healthStatus}                    health: ${bag[1].healthStatus}
type: ${bag[0].type}                type: ${bag[1].type}`);