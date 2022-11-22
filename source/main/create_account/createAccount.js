let submit = document.getElementById('create')
submit.addEventListener("click", store);

function store(){

    let name = document.querySelector('[name="username"]');
    let pw = document.querySelector('[name="password"]');
    let pw_r = document.querySelector('[name="repeat_password"]');
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(!pw.value.match(numbers)){
        alert('Please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lowercase letter');

    } else if(pw.value != pw_r.value){
        alert("Passwords don't match");

    }
    else {
        let users = localStorage.getItem('users') ? new Map(JSON.parse(localStorage.getItem('users'))) : new Map()
        if(users.has(name.value)){
            alert("An account under this username already exists")
        } else {
            users.set(name.value, pw.value);
            localStorage.setItem('users', JSON.stringify(Array.from(users)))
            alert('Your account has been created');
        }
  }
}