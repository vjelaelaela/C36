var database, form, player, game, playerCount;
var gameState = 0;
var allPlayers;

function setup(){
    createCanvas(500,500);
    database=firebase.database()
   game=new Game()
   game.getState()
   game.start()
   
}

function draw(){
    background("white");
    if(playerCount===4){
    game.update(1)
    }
    if(gameState===1){
        clear();
        game.play();
    }
}

