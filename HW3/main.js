function storyFunction(choice) {

    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;

    if (choice == 1 && answer1 == "Left") {
        document.getElementById("story").innerHTML = "You find that you are unable to voice your decision, so instead you wordlessly walk down the left path. As you pass the hooded figure, it disappears, only a smile visible as it does so. As you walk down this path, the air begins to become more brisk. Eventually you are able to see your breath, and shivers start to go through your body. You begin to doubt the path you have chosen.";
        document.getElementById("choice1").innerHTML = "Press On";
        document.getElementById("choice2").innerHTML = "Turn Around";
    }

    else if (choice == 2 && answer2 == "Right") {
        document.getElementById("story").innerHTML = "You find that you are unable to voice your decision, so instead you wordlessly walk down the left path. As you pass the hooded figure, it disappears, only a smile visible as it does so. As you walk down this path, you begin to smell something smokey in the air and you start to cough. The path ahead also starts to become more obscure and less visible. You begin to doubt the path you have chosen.";
        document.getElementById("choice1").innerHTML = "Keep Going";
        document.getElementById("choice2").innerHTML = "Go Back";
    }

    else if (choice == 1 && answer1 == "Press On") {
        document.getElementById("story").innerHTML = "You decide that the best recourse is to press on, hoping that the cold will lessen as you walk. Frost starts to become evident on the trees, and after a while, snow begins to fall, bocoming more and more abundant as you continue. However you notice that you are not getting colder. The wind picks up, and while the path becomes obscured, you are not buffeted by the wind. Then, as suddenly as it came, the snow clears and the scenery returns to what it was before. The hooded figure appears before you, in much the same manner it did before. 'I am delighted by your faith. Perhaps you would be willing to come with me a little further.' It extends its hand to you.";
        document.getElementById("choice1").innerHTML = "Take Its Hand";
        document.getElementById("choice2").innerHTML = "Stay Where You Are";
    }

    else if (choice == 2 && answer2 == "Turn Around") {
        document.getElementById("story").innerHTML = "Afraid that the cold will get worse, you turn around to try the other path. However, as you turn you see that the path has disappeared behind you, covered in a wall of snow right by your feet. Suddenly, a fierce wind blows and the snow rushes towards you. You are pushed down and though you flail to stand back up, the wind and snow keep you down. As your body gets colder and colder, you become sleepier and sleepier. As your vision starts to get hazy, the hooded figure appears over you. 'A shame you couldn't have the courage to keep going. Perhaps I could offer some help.' It extends its hand to you.";
        document.getElementById("choice1").innerHTML = "Accept Help";
        document.getElementById("choice2").innerHTML = "Refuse";
    }

    else if (choice == 1 && answer1 == "Keep Going") {
        document.getElementById("story").innerHTML = "You keep going, keeping a hand over your mouth to try and mitigate the smoke that you breath in. As you walk, the air gets dryer and wamer, and you can hear the crackle of a fire, but no flames are visible to you. Your eyes begin to water a bit, but then, as suddenly as it came, the smoke clears and the scenery returns to what it was before. The hooded figure appears before you, in much the same manner it did before. 'I am delighted by your conviction. Perhaps you would be willing to come with me a little further.' It extends its hand to you.";
        document.getElementById("choice1").innerHTML = "Accept The Offer";
        document.getElementById("choice2").innerHTML = "Do Not Move";
    }

    else if (choice == 2 && answer2 == "Go Back") {
        document.getElementById("story").innerHTML = "Fearing that the smoke may cause you harm, you attempt to go back the way you came to stay out of harms way. However, as you do, A surge of heat hits you and you see a that the entire forest behind you has succumbed to flames. You attempt to run from the fire, but a fierce wind blows them straight at you. As your body catches fire, you notice that though they do not hurt, your strength is immediately beginning to sap from your body. As your vision starts to get hazy, the hooded figure appears over you. 'A shame you couldn't have the determination to keep going. Perhaps I could offer some help.' It extends its hand to you.";
        document.getElementById("choice1").innerHTML = "Rely On It";
        document.getElementById("choice2").innerHTML = "Deny";
    }

    else if (choice == 1 && answer1 == "Take Its Hand") {
        document.getElementById("story").innerHTML = "As you take its hand, the figure smiles a wicked smile and squeezes your hand with significant force. 'I am oh so delighted by your faith.' The scenery around you begins to fade as your vision goes black." + "<br>Wake Once Again?";
        document.getElementById("choice1").innerHTML = "Wake";
        document.getElementById("choice2").innerHTML = "Remain Asleep";
    }

    else if (choice == 2 && answer2 == "Stay Where You Are") {
        document.getElementById("story").innerHTML = "The figure shake its head. 'A shame. Perhaps some other time then.' It snaps its fingers and the ground beneath you disappears. You fall into a black abyss, and as you continue to fall, you feel your consiousness fade until you can no longer remain awake." + "<br>Wake Once Again?";
        document.getElementById("choice1").innerHTML = "Wake";
        document.getElementById("choice2").innerHTML = "Remain Asleep";
    }

    else if (choice == 1 && answer1 == "Accept Help") {
        document.getElementById("story").innerHTML = "You take its hand and it helps you to your feet. Without letting go of your hand, it says 'Let us try this again shall we?' As it says this, you become incredibly sleepy, and you cannot help but fall alseep." + "<br>Wake Once Again?";
        document.getElementById("choice1").innerHTML = "Wake";
        document.getElementById("choice2").innerHTML = "Remain Asleep";
    }

    else if (choice == 2 && answer2 == "Refuse") {
        document.getElementById("story").innerHTML = "You remain lying in the snow, and as the cold begins to make you drowsy the figure above you says, 'Perhaps next time.' The world fades to black as you fall asleep" + "<br>Wake Once Again?";
        document.getElementById("choice1").innerHTML = "Wake";
        document.getElementById("choice2").innerHTML = "Remain Asleep";
    }

    else if (choice == 1 && answer1 == "Accept The Offer") {
        document.getElementById("story").innerHTML = "As you accept its offer, the figure smiles a wicked smile and squeezes your hand with significant force. 'Your conviction is oh so wonderful to behold.' The scenery around you begins to fade as your vision goes black." + "<br>Wake Once Again?";
        document.getElementById("choice1").innerHTML = "Wake";
        document.getElementById("choice2").innerHTML = "Remain Asleep";
    }

    else if (choice == 2 && answer2 == "Do Not Move") {
        document.getElementById("story").innerHTML = "The figure shake its head. 'A shame. Perhaps some other time then.' It snaps its fingers and the ground beneath you disappears. You fall into a black abyss, and as you continue to fall, you feel your consiousness fade until you can no longer remain awake." + "<br>Wake Once Again?";
        document.getElementById("choice1").innerHTML = "Wake";
        document.getElementById("choice2").innerHTML = "Remain Asleep";
    }

    else if (choice == 1 && answer1 == "Rely On It") {
        document.getElementById("story").innerHTML = "You take its hand and it helps you to your feet. Without letting go of your hand, it says 'Shall we give this one more go?' As it says this, you become incredibly sleepy, and you cannot help but fall alseep." + "<br>Wake Once Again?";
        document.getElementById("choice1").innerHTML = "Wake";
        document.getElementById("choice2").innerHTML = "Remain Asleep";
    }

    else if (choice == 2 && answer2 == "Deny") {
        document.getElementById("story").innerHTML = "The flames continue to cling to your body, and as the heat begins to make you drowsy the figure above you says, 'Perhaps next time.' The world fades to black as you fall asleep" + "<br>Wake Once Again?";
        document.getElementById("choice1").innerHTML = "Wake";
        document.getElementById("choice2").innerHTML = "Remain Asleep";
    }
    
    else if (choice == 1 && answer1 == "Wake") {
        document.getElementById("story").innerHTML = "Your head feels foggy as you open your eyes. You find yourself on an unfamiliar road in a forested woods you have never seen before. There is a trail that stretches out before you, with a fork in the road ahead of you. Suddenly, a hooded figure appears at the fork, seemingly out of thin air. All that is visible of the face is the mouth. In a voice that is hard to place both the figure's age and gender, it speaks, 'Before you lies a choice. The Left. The Right. What lies down the path you choose?' It lifts its arms to gesture to both paths. Which will you take?";
        document.getElementById("choice1").innerHTML = "Left";
        document.getElementById("choice2").innerHTML = "Right";
    }

    else if (choice == 2 && answer2 == "Remain Asleep") {
        document.getElementById("story").innerHTML = "Oblivion takes hold of you, and there remains nothing but blackness";
    }

}
