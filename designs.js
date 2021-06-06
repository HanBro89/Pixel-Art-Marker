let myTable = document.getElementById('pixelCanvas');

let gridSize = document.getElementById('sizePicker');

gridSize.addEventListener('submit', function(event) {
    event.preventDefault();
    // Select size input
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value; 
    // When size is submitted by the user, call makeGrid()
    makeGrid(height, width);
});

// Creates a grid from the user input
function makeGrid(height, width) {
    myTable.innerHTML = "";
    for (var i = 0; i < height; i ++) {
        var row = myTable.insertRow(i);
        for (var j = 0; j < width; j ++) {
            var cell = row.insertCell(j);  
                // Adds Event Listerers to cells
                cell.addEventListener('click', function(colorChange) {
                    //console.log(colorChange.target);
                    var color = document.getElementById('colorPicker').value;
                    colorChange.target.style.backgroundColor = color;
            });
        }
    };
};
