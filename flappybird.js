//board
let board;
let boardWidth = 360;
let boardHeight = 650;
let context;

//bird
let bridWidth = 34; //width/height ratio = 408228 = 17/12
let birdHeight = 24;
let birdX = boardWidth/8;
let birdY = boardHeight/2;

let bird = {
    x : birdX,
    y : birdY,
    width : bridWidth,
    height : birdHeight
}

window.onload = function () {
    board = document.getElementById("board"); // lowercase
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); //used for drawing on the board
    

    //draw the flappy bird
    context.fillstyle = "green";
    context.fillRect(bird.x, bird.y, bird.width, bird.height);
}

