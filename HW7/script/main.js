var myViewFinderArray = new Array();

class ViewFinder
{
    constructor(title, description, author, year, image)
    {
        this.title = title;
        this.description = description;
        this.author = author;
        this.year = year;
        this.image = image;
    }

    toStringTitle()
    {
        return "Title: " + this.title;
    }
    toStringDescription()
    {
      return "Description: " + this.description;
    }
    toStringAuthor()
    {
        return "Author: " + this.author;
    }
    toStringYear()
    {
        return "Year: " + this.year;
    }
    toStringImage()
    {
        return this.image;
    }
}

function initializeArray()
{
    var myViewFinder = new ViewFinder("&iexcl;Cesen Deportaci&oacute;n!", "This poster was created in the early 1970s to protest deportations of undocumented Mexican immigrants. Legislative efforts to criminalize immigrants followed on the heels of the bracero program, which brought millions of Mexican guest workers to the United States between 1946 and 1964.", "Rupert Garc&iacute;a", 1973, "images/sj_image_1.jpg");
    var myViewFinder1 = new ViewFinder("I See Red: Target", "This is part of a series Jaune Quick-to-See Smith (enrolled Salish, member of the Confederated Salish and Kootenai Nation, Montana) that incorporates stereotypes, racist tropes, and imagery that relates to the appropriation of Native Americans.", "Jaune Quick-to-See Smith", 1992, "images/sj_image_2.jpg");
    var myViewFinder2 = new ViewFinder("New York No. 1", "Depicts a group of people who have fallen on hard times during the Depression building an impoverished shelter. Groupings of such dwellings were dubbed 'Hoovervilles' in critique of President Herbert Hoover, who was unable to enact programs to effectively assist people plunged into poverty by the Depression.", "Seymour Fogel", 1936, "images/sj_image_3.jpg");
    var myViewFinder3 = new ViewFinder("Magnolia", "Magnolia was part of a community of muxes, individuals assigned male at birth but who identify as other genders. In some Indigenous cultures, muxes are considered a third gender and people with special powers. Magnolia holds a mirror up to her profile, doubling her image and suggesting the multiple ways that identity may be presented.", "Graciela Iturbide", 1986, "images/sj_image_4.jpg");
    var myViewFinder4 = new ViewFinder("afro.died.T", "Rozeal uses the title of this work, a play on Aphrodite, ancient Greek goddess of love and beauty, to present a cross-cultural rebellion on beauty ideals that traverses the Eastern and Western Hemispheres.", "Rozeal", 2011, "images/sj_image_5.jpg");
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);
}

function accessInformation()
{
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);

    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toStringTitle();
    document.getElementById("description").innerHTML = myViewFinderArray[randomNumber].toStringDescription();
    document.getElementById("author").innerHTML = myViewFinderArray[randomNumber].toStringAuthor();
    document.getElementById("year").innerHTML = myViewFinderArray[randomNumber].toStringYear();
    document.getElementById("img").src = myViewFinderArray[randomNumber].toStringImage();
}
