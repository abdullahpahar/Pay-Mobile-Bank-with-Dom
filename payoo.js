// //step--01 set event handler
// document.getElementById('login-btn').addEventListener('click',function(event){
//     // step---02 prevent default behavior (prevent reloading browser)
//     event.preventDefault();//reload off
   
//     // step---03 get the phone number
//     const phoneNumber = document.getElementById('phone-number').value;
//    const pinNumber =document.getElementById('pin-number').value;
//    console.log(phoneNumber,pinNumber);

   
// if(phoneNumber=='5' && pinNumber=='1234'){
//     console.log('You are logged in')
// }else(
//     alert('Your Mobile or Pin Wrong')
// )

// })
document.getElementById('login-btn').addEventListener('click',function(event){
    console.log('Your button clicked');
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber,pinNumber)
    if(phoneNumber=='5' && pinNumber=='1234'){
        console.log('Your are Right login');
        window.location.href ="/home.html"
    }else{
        alert('Your phone or Pin Wrong')
    }
})