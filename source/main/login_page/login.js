/*
Get element by ID for the username and password
check it with what's in electron store
if it exists, alert that login was a success
*/

let submit = document.getElementById('send')
submit.addEventListener("click", check);

//checking
/**
 * 
 * @returns Nothing if successful, and reroutes to home page
 * else, displays an alert that says the user does not exist.
 */
function check(){

  let name = document.getElementById('username');
  let pw = document.getElementById('password');
  let users = localStorage.getItem('users') ? new Map(JSON.parse(localStorage.getItem('users'))) : new Map()
  if(users.has(name.value)){
    if(users.get(name.value) == pw.value){
      // If successful login
      event.preventDefault();
      sessionStorage.setItem('username', name.value)
      window.location.replace("../home_page/home_page.html")
    } else{
      alert("Invalid password")
    }
  } else {
    if(name.value.length == 0 || pw.value.length == 0){
      return
    } else{
      alert("Account under " + name.value + " does not exist.")
    }
    
  }
} 