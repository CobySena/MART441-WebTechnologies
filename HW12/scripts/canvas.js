var canvas;
var ctx;
var x = 50;
var y = 50;
var square1;
var direction;
var questions;
var squareArray = [];
var score = 0;
var got;
$(document).ready(function(){

    setup();

    $(this).keypress(function(event){
        getKey(event);

    });
});



function setup()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    square1 = new Square(100,100,50,50,"#0000FF");
    $.getJSON("data/information.json", function(data) {
        for(var i = 0; i < data.squares.length; i++)
        {
            squareArray.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
        drawSquare();
    });



}

function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    var border = borderCollided(square1);
    if(actualLetter == "w")
    {
        moveUp();
        direction = "up";
    }
    if(actualLetter == "s")
    {
        moveDown();
        direction = "down";
    }
    if(actualLetter == "a")
    {
        moveLeft();
        direction = "left";
    }
    if(actualLetter == "d")
    {
        moveRight();
        direction = "right";
    }
    var test = false;
    for(var i = 0; i < squareArray.length; i++)
    {

        test = hasCollided(square1,squareArray[i]);
        if(test == true)
        {
            got = i;
            break;
        }
    }
    if(test)
    {
        score++;
        if(direction == "left")
        {
            moveRight();
        }
        else if(direction == "right")
        {
            moveLeft();
        }
        else if(direction == "up")
        {
            moveDown();
        }
        else if(direction == "down")
        {
            moveUp();
        }
        squareArray.splice(got, 1);
    }
    if(!border)
    {
        if(direction == "left")
        {
            square1.x+=40;
        }
        else if(direction == "right")
        {
            square1.x-=40;
        }
        else if(direction == "up")
        {
            square1.y+=40;
        }
        else if(direction == "down")
        {
            square1.y-=40;
        }

    }
    drawSquare();

}

function moveUp()
{
    square1.y-=10;
}
function moveDown()
{
    square1.y+=10;
}
function moveRight()
{
    square1.x+=10;
}
function moveLeft()
{
    square1.x-=10;
}

function drawSquare()
{
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = square1.mainColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);
    for(var i = 0; i < squareArray.length; i++)
    {
        ctx.fillStyle = squareArray[i].mainColor;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }

    ctx.font = "30px Arial";
    ctx.fillText("Score: " + score, 10, 50);

}

function hasCollided(object1, object2)
{
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}

function borderCollided(object1)
{
    return !(
        object1.y < 0 || object1.y > canvas.height ||
        object1.x < 0 || object1.x > canvas.width
    )
}
