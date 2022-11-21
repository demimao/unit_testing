/*
Get element by ID for the username and password
check it with what's in electron store
if it exists, alert that login was a success
*/

let submit = document.getElementById('send')
submit.addEventListener("click", check);
//checking
function check(){
  var storedName = localStorage.getItem('name');
  var storedPw = localStorage.getItem('pw');

  var name = document.getElementById('username');
  var pw = document.getElementById('password');

  if(name.value == storedName && pw.value == storedPw){
      alert('You are logged in.');
      console.log("success");
  }else{
      alert('Error on login');
      console.log("fail");

  }
}