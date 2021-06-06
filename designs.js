// Select color input


// Select size input
let myTable = document.getElementById('pixelCanvas');


// When size is submitted by the user, call makeGrid()

const submitGrid = document.getElementById('sizePicker');
submitGrid.addEventListener('submit', function(event) {
    event.preventDefault();
    let row = document.getElementById('inputHeight').value;
    let column = document.getElementById('inputWidth').value; 
    makeGrid(row, column);
});


function makeGrid(row, column) {
    myTable.innerHTML = "";
    for (var i = 0; i < row; i ++) {
        var makeRow = myTable.insertRow(i);
        for (var j = 0; j < column; j ++) {
            var makeCell = makeRow.insertCell(j);
            
        }
    }
};

