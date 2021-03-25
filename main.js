function displayFeedback(feedback){
    document.getElementById("feedbackbox").innerHTML = feedback;
}
function btnDisable(buttonID){
    document.getElementById(buttonID).style.display = "none";
}

async function isGameOver(){
    if(bag[0].healthStatus <= 0 || bag[1].healthStatus <= 0){
        let winner;
        if(bag[0].healthStatus > 0){
            winner = bag[0].pokemonName;
        }else{
            winner = bag[1].pokemonName;
        }
       btnDisable("heal_btn");
       btnDisable("attack_btn");
       displayFeedback(`GAMEOVER! ${winner.toUpperCase()} WON THE BATTLE`);
       // await syncWait(1500);
    }

}
function getCritical(enemy, num){

    let criticalAttack = Math.floor(Math.random()*num);

    if (criticalAttack > 6){
        bag[enemy].healthStatus -= criticalAttack;
        displayFeedback(`you hit a critical attack! for ${criticalAttack} hp`);
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

function syncWait(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}

async function attack() {
    if (neutralAttack(1) !== "missed") {
        neutralAttack(1);
        getCritical(1, 15);
        displayFeedback(`you hit ${bag[1].pokemonName}its health is now ${bag[1].healthStatus}`);
        await syncWait(1500);
    }else {
        displayFeedback("your attacked missed");
        await syncWait(1500);
    }
    displayFeedback("squirtle is now attacking");
    await syncWait(1500);
    enemyAttack();
    await syncWait(1500);
    displayFeedback("Choose a move");
}

async function enemyAttack(){
    let autoMove = Math.floor(Math.random()*11);

    if (autoMove >= 4){
        neutralAttack(0);
        getCritical(0, 7);
        displayFeedback(`${bag[1].pokemonName} hit ${bag[0].pokemonName}, ${bag[0].pokemonName}'s health is now ${bag[0].healthStatus}`);
        await syncWait(1500);

    }else if(autoMove < 4 && bag[1].healthStatus < bag[1].maxHealth){
        healPokemon(1);
        displayFeedback(`squirtle healed for 10hp squirtle's health is now ${bag[1].healthStatus}`);
        await syncWait(1500);
    }else {
        neutralAttack(0);
        getCritical(0, 7);
        displayFeedback("squirtle missed!");
        await syncWait(1500);
    }
}

async function heal(){
    if (bag[0].healthStatus === bag[0].maxHealth){
        displayFeedback("pikachu's health is already full");
        await syncWait(1500);
    } else if(bag[0].healthStatus !== bag[0].maxHealth){
        healPokemon(0);
        displayFeedback(`pikachu healed for 10 hp pikachu's health is now ${bag[0].healthStatus}`);
        await syncWait(1500);
    }
    enemyAttack();
    await syncWait(1500);
    displayFeedback("Choose a move");
}

document.getElementById("attack_btn").addEventListener("click",function () {
    attack();
    isGameOver();
});

document.getElementById("heal_btn").addEventListener("click",function () {
    heal();
    isGameOver();
});

