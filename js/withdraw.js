/*
1.add event handler with the withdraw button
2.get the withdraw amount from the withdraw input field
2-5: also make sure to convert the input into a number by using parsefloat
3. get previous withdraw total
4. Calculate total withdraw amount
4-5. set total withdraw amount
5.get the previous balance total
6. calculate new balance total
7. clear the input field
*/


// step-1: 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2
    const withdrawField= document.getElementById('user-withdraw');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount =parseFloat(newWithdrawAmountString);
    console.log(newWithdrawAmount);

     // step-7
     withdrawField.value='';
     
    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number');
        return;
    }

    // step-3 
    const withdrawTotalElement=document.getElementById('withdraw-total');
    const previousWithdrawTotalString =withdrawTotalElement.innerText;
    const previousWithdrawTotal= parseFloat(previousWithdrawTotalString);
    
   
    // step-5
    const balanceTotalElement= document.getElementById('balance-total');
    const previousBalanceTotalString= balanceTotalElement.innerText;
    const previousBalanceTotal =parseFloat(previousBalanceTotalString);

    
   
    if(newWithdrawAmount>previousBalanceTotal){
        alert('You have no enough money');
        return;
    }

     // step-4:
     const currentWithdrawTotal =previousWithdrawTotal+ newWithdrawAmount;
     withdrawTotalElement.innerText= currentWithdrawTotal;

    // step-6
    const newBalanceTotal=previousBalanceTotal -newWithdrawAmount;
    balanceTotalElement.innerText= newBalanceTotal;

})
