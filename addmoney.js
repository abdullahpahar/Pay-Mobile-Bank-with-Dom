

document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    // console.log('add money clicked added')
    const addMoneyInput = document.getElementById('input-add-money').value;
    const addInputPin = document.getElementById('input-pin-number').value;
    if(addInputPin==='1234'){
        console.log('You are log in')
    }else{
        alert('Your Failed please Right Input')
    }
    // console.log(addMoneyInput,addInputPin)
    const addMoneyInputNumber = parseFloat(addMoneyInput);
    const addInputPinNumber = parseFloat(addInputPin);
    // console.log(addInputPinNumber,addMoneyInputNumber);
    const balance = document.getElementById('account-balance').innerText;
    const balanceNumber = parseFloat(balance)
    // console.log(balanceNumber)
    const currentBalance = addMoneyInputNumber+balanceNumber;
    // console.log(currentBalance);
    document.getElementById('account-balance').innerHTML = currentBalance;
   

})