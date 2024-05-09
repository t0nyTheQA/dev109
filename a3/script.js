
function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    upDiamond(pHeight, pColorEven, pColorOdd, pSymbol);
    downDiamond(pHeight, pColorEven, pColorOdd, pSymbol);
}

function upDiamond(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    for (var i = 1; i <= pHeight; i++) {
        var line = "";
        var space = "&nbsp;";
        for (var j = 1; j <= pHeight - i; j++) {
            line += space;
        }
        for (var k = 0; k < 2 * i; k++) { 
            var color;
            if (k % 2 === 0) {
                color = pColorEven;
            } else {
                color = pColorOdd;
            }
            line += "<span style='color:" + color + ";'>" + pSymbol + "</span>";
        }
        rLine += "<p>" + line + "</p>";
    }
    document.getElementById("diamond").innerHTML += rLine;
}

function downDiamond(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    for (var i = 1; i <= pHeight - 1; i++) {
        var line = "";
        var space = "&nbsp;";
        for (var j = 0; j < i; j++) {
            line += space;
        }
        for (var k = (pHeight - i) * 2; k > 0; k--) { 
            var color;
            if (k % 2 === 0) {
                color = pColorEven;
            } else {
                color = pColorOdd;
            }
            line += "<span style='color:" + color + ";'>" + pSymbol + "</span>";
        }
        rLine += "<p>" + line + "</p>";
    }
    document.getElementById("diamond").innerHTML += rLine;
}

