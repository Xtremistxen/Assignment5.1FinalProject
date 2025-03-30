//Created a Add Anime button and and Removal button the user can add as many row/cells as they want to create a Anime watching list the Removeal button will only show when you Add a row/cess.
// the Data will save to their local Browsers storage and will persisist even when they leave or exit the page ensureing that their watch list doesnt get lost

// Added an onclick function to add a row when you click add row button
document.getElementById("addRowButton").onclick = function() 
{
    addRow();
};

// When the page loads this will show the saved data when previously visted
window.onload = function() 
{
    loadTable();
};

function addRow() 
{
    // Creates the body for the table for each row to sit in
    var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];

    // This will create a new row below each other row when you add or remove
    var row = table.insertRow(table.rows.length);

    // This will add new cells to be instered into each row
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    // This will add the text inputs for each cell such as Enter name, Enter Eps(episodes) Link to anime and Yes or no(completed)
    cell1.innerHTML = '<input type="text" placeholder="Enter name">';
    cell2.innerHTML = '<input type="text" placeholder="Enter Eps">';
    cell3.innerHTML = '<input type="text" placeholder="Link to anime">';
    cell4.innerHTML = '<input type="text" placeholder="Yes or No">';

    // This will add a removal button where you can remove an added row/cells
    var removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    removeButton.classList.add("removeButton");
    removeButton.onclick = function() {
        removeRow(row);
    };
    cell4.appendChild(removeButton);

    // This will save the table to local storage
    saveTable();
}

function removeRow(row) {
    // This will ensure the row is removed when you click the remove button
    row.parentNode.removeChild(row);

    // Saves the table data to local storage
    saveTable();
}

function saveTable() {
    // This will get all the rows in storage
    var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    var rows = table.getElementsByTagName('tr');
    var tableData = [];

    // This will loop through each of the cells in order to check the saved data
    for (var i = 0; i < rows.length; i++) 
        {
        var cells = rows[i].getElementsByTagName('td');
        var rowData = {
            name: cells[0].getElementsByTagName('input')[0].value,
            eps: cells[1].getElementsByTagName('input')[0].value,
            link: cells[2].getElementsByTagName('input')[0].value,
            yesNo: cells[3].getElementsByTagName('input')[0].value
        };
        tableData.push(rowData);
    }

    // Saves to a local storage
    localStorage.setItem('tableData', JSON.stringify(tableData));
}

function loadTable() {
    // This will create a local storage and will save your table data when you leave the page and everything will be just as you left it
    var savedData = localStorage.getItem('tableData');

    if (savedData) {
        var tableData = JSON.parse(savedData);
        var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];

        // This will loop the saved data in the table cell;0-3
        tableData.forEach(function(rowData) 
        {
            var row = table.insertRow(table.rows.length);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);

            // This will create the values in the saved table
            cell1.innerHTML = '<input type="text" placeholder="Enter name" value="' + rowData.name + '">';
            cell2.innerHTML = '<input type="text" placeholder="Enter Eps" value="' + rowData.eps + '">';
            cell3.innerHTML = '<input type="text" placeholder="Link to anime" value="' + rowData.link + '">';
            cell4.innerHTML = '<input type="text" placeholder="Yes or No" value="' + rowData.yesNo + '">';

            // This button will create a Remove button for each table created
            var removeButton = document.createElement("button");
            removeButton.innerHTML = "Remove";
            removeButton.classList.add("removeButton");
            removeButton.onclick = function() 
            {
                removeRow(row);
            };
            cell4.appendChild(removeButton);
        });
    }
}

