let user = sessionStorage.getItem('username');
// js to create a username icon with their name
let ele = document.getElementById('corner');
let node = document.createTextNode (user);
ele.style.color = 'white';

ele.prepend(node);

// Backend to read database and populate table when page gets opened


finalValue = []

function openForm() {
    document.getElementById("expense").style.display = "block";
}
function closeForm() {
    document.getElementById("expense").style.display = "none";
}
//Adds a click listener to the add-row buttons

//Adds a click listener to the add-row buttons where after add expense button is pressed, form is opened
document.querySelector("#adding").addEventListener("click", () => {
    // Add elements in the Backend (add to storage) and in front end(add new row to table) and then close form
    let expenseName = document.getElementById("name").value;
    let expenseCategory = document.getElementById("category").value;
    

    let expenseAmount = document.getElementById("amount").value;
    let expenseDate = document.getElementById("date").value;
    addRow(expenseName,expenseCategory, expenseAmount, expenseDate);
    // Clear values in input boxes
    document.getElementById("name").value = '';
    document.getElementById("category").value = '';
    document.getElementById("amount").value = '';
    document.getElementById("date").value = '';
    closeForm();
    
    });
document.querySelector("#add-row").addEventListener("click", () => {
    // Open form item
    openForm();
    });
    
    //initializing the row counter
    let x = 2;
    
    const addRow = (expenseName, expenseCategory, expenseAmount, expenseDate) => {
    //creates a new row element
    let row = document.createElement("tr");
    //row.style.border-bottom-color =  "#ff0000";
    //creates a new column element
    let column1 = document.createElement("td");
    
    //create text for the column element
    const column1text = document.createTextNode(expenseName);
    
    //appends the text to the column element
    column1.appendChild(column1text);
    let column2 = document.createElement("td");

    const column2text = document.createTextNode(expenseCategory);
    column2.appendChild(column2text);

    let column3 = document.createElement("td");
    const column3text = document.createTextNode('$' + expenseAmount);
    column3.appendChild(column3text);

    let column4 = document.createElement("td");
    const column4text = document.createTextNode(expenseDate);
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



    // Adding new data to the front end table
    
    //appends the row to the table
    document.querySelector("#main-table").appendChild(row);
    x++;
    let expenseValue = {
        name: expenseName,
        category: expenseCategory,
        value: expenseAmount,
        date:  expenseDate,
    }

    // Backend Add Row to Database
    let key = localStorage.getItem(user) ? new Map(JSON.parse(localStorage.getItem(user))) : new Map()   
    
    finalValue.push(expenseValue)

    localStorage.setItem(user, JSON.stringify(Array.from(finalValue)))



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

let logout = document.getElementById('logout');
logout.addEventListener('click', logoutAction)
function logoutAction() {
    // alert('logout button was clicked');
    event.preventDefault();
    window.location.replace("../login_page/login_page.html")
}
