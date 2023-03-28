var picSelector = "#pic";
var allPics = new Array();
var allProv = new Array("One cannot quarrel without an opponent.", "Experience nature, and in doing so learn about yourself.", "Who chases two rabbits catches neither.", "A frog in a well does not know the great ocean.", "Luck exists in the leftovers.", "Fall down seven times, get up eight times.", "Spilled water will not return to the bowl.", "The smallest good deed is better than the grandest good intention.", "Tigers die and leave their skins; people die and leave their names.", "One who smiles rather than rages is always the stronger.");
class PicInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath;
    }
}

function initializeArray()
{

      var pic0 = new PicInfo("#pic", "images/scene0.jpg");
      var pic1 = new PicInfo("#pic", "images/scene1.jpg");
      var pic2 = new PicInfo("#pic", "images/scene2.jpg");
      var pic3 = new PicInfo("#pic", "images/scene3.jpg");
      var pic4 = new PicInfo("#pic", "images/scene4.jpg");
      var pic5 = new PicInfo("#pic", "images/scene5.jpg");
      var pic6 = new PicInfo("#pic", "images/scene6.jpg");
      var pic7 = new PicInfo("#pic", "images/scene7.jpg");
      var pic8 = new PicInfo("#pic", "images/scene8.jpg");
      var pic9 = new PicInfo("#pic", "images/scene9.jpg");
      allPics.push(pic0);
      allPics.push(pic1);
      allPics.push(pic2);
      allPics.push(pic3);
      allPics.push(pic4);
      allPics.push(pic5);
      allPics.push(pic6);
      allPics.push(pic7);
      allPics.push(pic8);
      allPics.push(pic9);

}
$(document).ready(function(){

    initializeArray();

    var pos = Math.floor(Math.random() * allPics.length);

    $(allPics[0].theSelector).attr("src", allPics[0].theImagePath);

    $("button").click(function(){

        var pos = Math.floor(Math.random() * allPics.length);

        $(allPics[pos].theSelector).attr("src", allPics[pos].theImagePath);

        $("#prelim").fadeOut();

        $("#content").text(allProv[pos]);

        setInterval(moveSquare1, 1000);
        setInterval(moveSquare2, 1000);
        setInterval(moveSquare3, 1000);
        setInterval(moveSquare4, 1000);

        $(allPics[pos].theSelector).fadeOut().fadeIn();

    });
});

function moveSquare1()
{
    $("#square1").animate({left:1100}).animate({top:600}).animate({left:300}).animate({top:0});
}

function moveSquare2()
{
    $("#square2").animate({top:600}).animate({left:300}).animate({top:0}).animate({left:1100});
}

function moveSquare3()
{
    $("#square3").animate({left:300}).animate({top:0}).animate({left:1100}).animate({top:600});
}

function moveSquare4()
{
    $("#square4").animate({top:0}).animate({left:1100}).animate({top:600}).animate({left:300});
}
