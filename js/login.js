// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the email input field
    // alway remember to use .value to get text from an input field
    const emailField= document.getElementById('user-email');
    const email=emailField.value;
    // step-3:get password
    // 3-1: set id on the html element
    // 3-2: get the element
    // 3-3: get the from the element
    const passwordField= document.getElementById('user-password');
    const password= passwordField.value;


    
    //DANGER: DO NOT VERIFY email password on the client side!
    // step-4: verify email password and check valid user or not
    if(email === 'neelima@gmail.com' && password ==='secret'){
        console.log('valid user')
    }
    else{
        console.log('invalid user')
    }
})