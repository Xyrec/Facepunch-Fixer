// ==UserScript==
// @name                        Facepunch Fixer
// @author                      Xyrec
// @version                     3.1
// @description                 Adds a link to the ticker, gets rid of huge usertitles, splits the front page into two columns instead of one.
// @updateURL                   https://github.com/Xyrec/Facepunch-Fixer/master/Facepunch_Fixer.user.js
// @downloadURL                 https://github.com/Xyrec/Facepunch-Fixer/master/Facepunch_Fixer.user.js
// @include                     http://www.facepunch.com/*
// @include                     http://facepunch.com/*
// @include                     https://www.facepunch.com/*
// @include                     https://facepunch.com/*
// ==/UserScript==

// Ticker Link

var container = document.getElementById("navbarlinks");
    var div = document.createElement("div");
    div.className = "navbarlink";
    var a = document.createElement("a");
    a.href = "/fp_ticker.php";
    a.setAttribute("onclick", "return OpenURL( 'Ticker', '/fp_ticker.php' );");
        var img = document.createElement("img");
            img.src = "fp/navbar/ticker.png";
            img.alt = img.title = "Ticker";
        a.appendChild(img);
        var t = document.createTextNode(" Ticker");
        a.appendChild(t);
    div.appendChild(a);
container.insertBefore(div, container.getElementsByTagName("div")[0]);

// Columns

$(function() {
    $(".forums").first().nextAll().appendTo($("<td valign='top' class='FrontPageForums'></td>").insertAfter(".FrontPageForums"));
    $(".FrontPageForums").css("padding", "5px");
    $("td.last_post_column").css("width", "200px");
});

$(function() {
    $("#cat413").appendTo($("<td valign='left' class='FrontPageForums'></td>").insertAfter("#cat3"));
});

// Usertitle Fix, Remove everything below this line to get huge usertitles back

var usertitles = document.getElementsByClassName("usertitle");
for (var i = 0; i < usertitles.length; ++i) {
    usertitles[i].style["font-size"] = "10px";

    var fonts = usertitles[i].getElementsByTagName("font");
    for (var j = 0; j < fonts.length; j++) {
        fonts[j].setAttribute("size", 1);
    }
}
