//step--01 set event handler
document.getElementById('login-btn').addEventListener('click',function(event){
    // step---02 prevent default behavior (prevent reloading browser)
    event.preventDefault();//reload off
    console.log('jo ;o');
    // step---03 get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
   console.log(phoneNumber)

})