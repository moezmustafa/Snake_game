//variables for the game

let direction = {X:0 , Y : 0};

let speed = 2 ;

let lastPaintTime = 0 ;

// constants for the game

const foodsound = new Audio('food.mp3');
const gamesound = new Audio('gameover.mp3');
const musicsound = new Audio("music.mp3")
const movesound = new Audio('move.mp3')

//Game Funciton 
function main(ctime){
    {
    window.requestAnimationFrame(main);

    if((ctime - lastPaintTime )/1000 < 1/speed);
    console.log(ctime);

    return ; 
}
lastPaintTime = ctime;
gameEngine();
}

function gameEngine();{

    //part1 updating the snkae variable that will be an array


    //part2 render the snake and the food 

}



//Main of the game
window.requestAnimationFrame(main);