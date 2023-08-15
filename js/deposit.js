// step-1: add event handler to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the deposit amount from the input field
    const depositField=document.getElementById('deposit-field');
    const newDepositAmountString =depositField.value;
    const newDepositAmount= parseFloat(newDepositAmountString)
    console.log(typeof newDepositAmount)

    // step-7: clear the deposit field
    depositField.value='';

    if(isNaN(newDepositAmount)){
        alert('please provide a valid number');
        return;
    }
    // step-3: get the current deposit total 
    // for non input(element other than input, textarea ) use innerText to get the text
    const depositTotalElement= document.getElementById('deposit-total');
    const previousDepositTotalString= depositTotalElement.innerText;

    const previousDepositTotal =parseFloat(previousDepositTotalString)
    // step-4: add number to set the deposit
    const currentDepositTotal =previousDepositTotal+ newDepositAmount;

    // set the deposit total
    depositTotalElement.innerText=currentDepositTotal;

    // step-5: get balance current total
    const balanceTotalElement= document.getElementById('balance-total');
    const previousBalanceTotalString=balanceTotalElement.innerText;
    const previousBalanceTotal= parseFloat(previousBalanceTotalString);

    if(newDepositAmount>previousBalanceTotal){
        alert('You have no enough money');
        return;
    }

    // step-6: calculate current total balance
    const currentBalanceTotal =previousBalanceTotal+ newDepositAmount;

    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;


    


})