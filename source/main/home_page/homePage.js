let user = sessionStorage.getItem('username');

//Adds a click listener to the add-row button
document.querySelector("#add-row").addEventListener("click", () => {
    //calls the addRow() method on clicking the button
    addRow();
    });
    
    //initializing the row counter
    let x = 2;
    
    const addRow = () => {
    //creates a new row element
    let row = document.createElement("tr");
    
    //creates a new column element
    let column1 = document.createElement("td");
    
    //create text for the column element
    const column1text = document.createTextNode(document.getElementById("name").value);
    
    //appends the text to the column element
    column1.appendChild(column1text);
    let column2 = document.createElement("td");
    const column2text = document.createTextNode(document.getElementById("category").value);
    column2.appendChild(column2text);

    let column3 = document.createElement("td");
    const column3text = document.createTextNode('$'+document.getElementById("amount").value);
    column3.appendChild(column3text);

    let column4 = document.createElement("td");
    const column4text = document.createTextNode(document.getElementById("date").value);
    column4.appendChild(column4text);
    
    let column5 = document.createElement("td");
    let btn = document.createElement("button");
    btn.innerHTML = "Edit";
    btn.type = "submit";
    btn.name = "formBtn";
    btn.id = 'btnn'
    btn.style =  'margin: 0;'
    btn.addEventListener("click", function () {
        editRow()
      });
    const column5text = btn
    column5.appendChild(column5text)
    //appends the first column to the new row
    row.appendChild(column1);
    
    //appends the second column to the new row
    row.appendChild(column2);

    row.appendChild(column3);
    row.appendChild(column4);
    row.appendChild(column5);
    // Backend Add Row to Database
    //let expenses = localStorage.getItem('expenses') ? new Map(JSON.parse(localStorage.getItem('expenses'))) : new Map()

    
    //appends the row to the table
    document.querySelector("#main-table").appendChild(row);
    // Clear values in input boxes
    document.getElementById("name").value = '';
    document.getElementById("category").value = '';
    document.getElementById("amount").value = '';
    document.getElementById("date").value = '';
    x++;
    };
    function editRow(){
        alert('Edit Button was clicked')
    }
    function inputCheck(){
        const name = document.getElementById("name").value;
        const category = document.getElementById("category").value;
        const amount = document.getElementById("amount").value;
        const date = document.getElementById("date").value;
        // Check that category is either Wants Needs or Savings
        // Check that date entry is a valid date
        // Check that amount is a valid integer
    }
    function deleteRow(){

    }