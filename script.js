var myButton = document.getElementById('button-email');


function validateEmail(){
    var emailAddress = document.getElementById('inputEmail');
    var warningMessage = document.getElementById('warning');
    warningMessage.textContent = '';
    if(emailAddress.value.includes('@'))
    {
        warningMessage.textContent = 'Thank you!';  
        emailAddress.value = ' '; 
        emailAddress.style.border='1px solid var(--desaturated-red)';
        document.getElementById('errorIcon').style.display='none';     
    } else{
        document.getElementById('errorIcon').style.display='inline';
        emailAddress.style.border='3px solid var(--soft-red)';
        warningMessage.textContent = 'Please provide a valid email';
    }
}

myButton.onclick = function(){
    validateEmail();
}