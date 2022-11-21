/*
Get element by ID for the username and password
check it with what's in electron store
if it exists, alert that account already exists
if it does not exist, add to store
*/

let submit = document.getElementById('create')
submit.addEventListener("click", store);

function store(){

  var name = document.querySelector('[name="username"]');
  var pw = document.querySelector('[name="password"]');
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;
  console.log(name.value); 
  console.log(pw.value); 
  if(name.value.length == 0){
      alert('Please fill in email');

  }else if(pw.value.length == 0){
      alert('Please fill in password');

  }else if(name.value.length == 0 && pw.value.length == 0){
      alert('Please fill in email and password');

  }else if(pw.value.length > 8){
      alert('Max of 8');

  }else if(!pw.value.match(numbers)){
      alert('please add 1 number');

  }else if(!pw.value.match(upperCaseLetters)){
      alert('please add 1 uppercase letter');

  }else if(!pw.value.match(lowerCaseLetters)){
      alert('please add 1 lowercase letter');

  }else{
      localStorage.setItem('name', name.value);
      localStorage.setItem('pw', pw.value);
      alert('Your account has been created');
  }
}