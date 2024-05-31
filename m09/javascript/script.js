var mybutton = document.querySelector("#clearButton");
var colorPicker = document.querySelector("#colorPicker");
var sizePicker = document.querySelector("#sizePicker");

mybutton.addEventListener("click", function(event) {
    var elements = document.getElementsByClassName("dot");
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
    // Let us stop the propagation of events
    event.stopPropagation();
});

addEventListener("click", function(event) {
    // Ensure we don't draw a dot when the clear button is clicked
    if (event.target.id !== "clearButton" && event.target.id !== "colorPicker" && event.target.id !== "sizePicker") {
        var dot = document.createElement("div");
        dot.className = "dot";
        dot.style.backgroundColor = colorPicker.value;

        var size = parseInt(sizePicker.value);
        dot.style.width = size + "px";
        dot.style.height = size + "px";
        dot.style.left = (event.pageX - size / 2) + "px";
        dot.style.top = (event.pageY - size / 2) + "px";

        document.body.appendChild(dot);
    }
});
