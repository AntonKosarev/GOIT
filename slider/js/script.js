$(window).resize(function(){
    var text = $(".content_article h1"),
        currentWidth = parseInt(text.css("width")),
        newWidth = 85;

    if(currentWidth==1920) newWidth = 85;
    else if (currentWidth<1920 && currentWidth>=1820) newWidth = 80;
    else if (currentWidth<1820 && currentWidth>=1720) newWidth = 75;
    else if (currentWidth<1720 && currentWidth>=1620) newWidth = 70;
    else if (currentWidth<1620 && currentWidth>=1520) newWidth = 65;
    else if (currentWidth<1520 && currentWidth>=1420) newWidth = 60;
    else if (currentWidth<1320 && currentWidth>=1320) newWidth = 55;
    else if (currentWidth<1220 && currentWidth>=1220) newWidth = 50;
    else if (currentWidth<1120 && currentWidth>=1120) newWidth = 45;
    else if (currentWidth<1420 && currentWidth>=1020) newWidth = 40;
    else if (currentWidth<1420) newWidth = 35;

    text.css("font-size",newWidth+"px");
});