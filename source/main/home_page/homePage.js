let user = sessionStorage.getItem('username');
// js to create a username icon with their name
let ele = document.getElementById('corner');
let node = document.createTextNode("Hi, " + user + "!");
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

function openUpdate() {
    document.getElementById("update").style.display = "block";
}
function closeUpdate() {
    document.getElementById("update").style.display = "none";
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
        editRow(row)
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
    let expenseValue = {
        name: expenseName,
        category: expenseCategory,
        value: expenseAmount,
        date:  expenseDate,
    }
    console.log(expenseValue)
    // Backend Add Row to Database
    finalValue.push(expenseValue)
    localStorage.setItem(user, JSON.stringify(finalValue))

};
    
function editRow(row){
    openUpdate();
    document.getElementById("name_update").value = JSON.parse(localStorage.getItem(user))[row.rowIndex-1].name
    document.getElementById("category_update").value = JSON.parse(localStorage.getItem(user))[row.rowIndex-1].category;
    document.getElementById("amount_update").value = JSON.parse(localStorage.getItem(user))[row.rowIndex-1].value;
    document.getElementById("date_update").value = JSON.parse(localStorage.getItem(user))[row.rowIndex-1].date;

    document.querySelector("#updating").addEventListener("click", () => {
        // Add elements in the Backend (add to storage) and in front end(add new row to table) and then close form
        let oldExpenses = JSON.parse(localStorage.getItem(user))
    
        oldExpenses[row.rowIndex-1].name = document.getElementById("name_update").value;
        oldExpenses[row.rowIndex-1].category = document.getElementById("category_update").value;
        oldExpenses[row.rowIndex-1].value = document.getElementById("amount_update").value;
        oldExpenses[row.rowIndex-1].date = document.getElementById("date_update").value;

        localStorage.setItem(user, JSON.stringify(oldExpenses))

        // Clear values in input boxes
        document.getElementById("name_update").value = '';
        document.getElementById("category_update").value = '';
        document.getElementById("amount_update").value = '';
        document.getElementById("date_update").value = '';
        closeUpdate();
        
    });

    document.querySelector("#deleting").addEventListener("click", () => {
        // Add elements in the Backend (add to storage) and in front end(add new row to table) and then close form
        let oldExpenses = JSON.parse(localStorage.getItem(user))
    
        oldExpenses.splice(row.rowIndex-1, 1);

        localStorage.setItem(user, JSON.stringify(oldExpenses))

        // Clear values in input boxes
        document.getElementById("name_update").value = '';
        document.getElementById("category_update").value = '';
        document.getElementById("amount_update").value = '';
        document.getElementById("date_update").value = '';
        closeUpdate();
        
    });
    
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
