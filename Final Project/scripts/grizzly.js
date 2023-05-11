var picSelector = "#pic";
var allPics = new Array();

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

      var pic0 = new PicInfo("#pic", "images/grizzly_gallery_1.jpg");
      var pic1 = new PicInfo("#pic", "images/grizzly_gallery_2.jpg");
      var pic2 = new PicInfo("#pic", "images/grizzly_gallery_3.jpg");
      var pic3 = new PicInfo("#pic", "images/grizzly_gallery_4.jpg");
      allPics.push(pic0);
      allPics.push(pic1);
      allPics.push(pic2);
      allPics.push(pic3);

}
$(document).ready(function(){

    initializeArray();

    var pos = 0;

    $(allPics[0].theSelector).attr("src", allPics[0].theImagePath);

    $("button").click(function(){

        if(pos > 3)
        {
          pos = 0;
        }
        else
        {
          pos++;
        }

        $(allPics[pos].theSelector).attr("src", allPics[pos].theImagePath);

        $("#prelim").fadeOut();

        $(allPics[pos].theSelector).fadeOut().fadeIn();

    });
});
