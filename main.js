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
document.getElementById("attack_btn").addEventListener("click",function (){
   if (neutralAttack(1) !== "missed"){
       neutralAttack(1);
       getCritical(1, 15);
       alert(`you hit ${bag[1].pokemonName} for its health is now ${bag[1].healthStatus}`)
   }else {
       alert("your attacked missed");
   }
   alert("squirtle is now attacking");

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

});
