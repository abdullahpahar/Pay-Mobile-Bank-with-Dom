document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    // console.log('add cash out btn with click')

    const cashOutInput= document.getElementById('input-cash-out').value;
    // console.log(cashOutInput);
    const cashOutInputNumber = parseFloat(cashOutInput);
    // console.log(cashOutInputNumber)
    const cashOutInputPin= document.getElementById('cash-out-pin').value;
    if(cashOutInputPin==='123'){
        console.log('Your Money is Reduce')
    }else{
        alert("Your Pin is incorrect please try again")
    }

    const balance = document.getElementById('account-balance').innerText;
    // console.log(balance)
    const balanceNumber = parseFloat(balance);
    const newBalance = balanceNumber - cashOutInputNumber;
    // console.log(newBalance);
    document.getElementById('account-balance').innerHTML= newBalance;
})