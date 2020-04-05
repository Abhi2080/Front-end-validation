const username = document.getElementById('username1');
const Username = document.getElementById('user');
const email = document.getElementById('email1');
const Email = document.getElementById('email');
const password = document.getElementById('password1')
const Password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm1');
const PasswordConfirm = document.getElementById('password2');
const button = document.getElementById('button1');


//////show Error message/////
function showError(input,input1,message){
    input.className = "form-control fail";
    input1.innerHTML = message
    input1.className = "form-text fail2"
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

button.addEventListener('click', function(e){
    e.preventDefault();
    if(username.value.trim() === ""){
        showError(username, Username,'please enter a username')
    }else{
        username.className = "form-control success"
    }

    if(email.value.trim() === ""){
        showError(email , Email, 'please enter an email')
    }else if(validateEmail(email.value)){
        email.className = "form-control success"
    }else{
        showError(email,Email ,'please enter a valid email')
    }

    if(password.value.trim() === ""){
        showError(password, Password,'please enter a password')
    }else if(password.value.trim().length > 5){
        password.className = "form-control success"
    }else{
        showError(password, Password,'please enter a password of atlest six digits')
    }

    if(passwordConfirm.value.trim() === ""){
        showError(passwordConfirm, PasswordConfirm,'please enter a passwordConfirm')
    }else if(password.value.trim() === passwordConfirm.value.trim()){
        passwordConfirm.className = "form-control success"
    }else{
        showError(passwordConfirm, PasswordConfirm,'please enter the same password')
    }
})

