document.getElementById('deposit-button').addEventListener('click',function () {
    const getInputDeposite = document.getElementById('deposit-value').value;
    const convertDeposite = parseFloat(getInputDeposite)

    const getDespostieArea = document.getElementById('deposite-area');
    const convertDepositArea = parseFloat(getDespostieArea.innerText);

    
    const newDeposit = convertDeposite +convertDepositArea;
    getDespostieArea.innerText = newDeposit;
    
    
    
    const getMainBalence = document.getElementById('total-balence');
    const convetMainBalence = parseFloat(getMainBalence.innerText)
    const sumMainBalence = convetMainBalence + convertDeposite;
    getMainBalence.innerText = sumMainBalence;

    document.getElementById('deposit-value').value = '';


    const getTransationList = document.getElementById('transation-area-list');
    const createP = document.createElement('p')
    createP.style.paddingBottom ="9px";
    createP.style.paddingLeft = "20px";
   
    createP.innerText ="Your Doposite Amnout :  " + getInputDeposite;
    const createp2 = document.createElement('p');
    createp2.style.paddingLeft = '20px';
    createp2.style.paddingBottom = "9px";
    
    createp2.innerText ="Your Main Balence is :  " +  + sumMainBalence;

    getTransationList.appendChild(createp2);
    getTransationList.appendChild(createP);

    

    

})

document.getElementById("withdraw-button").addEventListener('click',function () {

    const getMainBalenceCheck = document.getElementById('total-balence');
    const convetBalence = parseFloat(getMainBalenceCheck.innerText);
    
    if (convetBalence <=  0 ) {
        alert("Your current balence is empty");
    }else{
        const getWithdrawValue = document.getElementById('withdraw-value').value;
        const convertWithdrawValue = parseFloat(getWithdrawValue);

        const getWithdrawBalence = document.getElementById('withdraw-balence-area');
        const convertWithdraw = parseFloat(getWithdrawBalence.innerText);
        
        const sumWithdrawbalence = convertWithdraw + convertWithdrawValue;
        getWithdrawBalence.innerText = sumWithdrawbalence;
    
        
        const withDrawfinalbalence = document.getElementById('total-balence');
        const convertWithdrawbalence = parseFloat(withDrawfinalbalence.innerText);
        const sumFinalTotal = convertWithdrawbalence - convertWithdrawValue;
        withDrawfinalbalence.innerText = sumFinalTotal;
    
    

        const getWithdrawList = document.getElementById('transation-area-list');
        const createp = document.createElement('p');
        createp.style.paddingLeft = '20px';
        createp.style.paddingBottom = '9px';
       
        createp.innerText = 'Your Recent Withdraw : ' + convertWithdrawValue;
        const createP2 = document.createElement('p');
        createP2.style.paddingLeft = '20px';
        createP2.style.paddingBottom = '9px';
        createP2.innerText = "Befor Withdraw Balence : " + sumFinalTotal;
        getWithdrawList.appendChild(createP2)
        getWithdrawList.appendChild(createp);
        


        document.getElementById('withdraw-value').value = '';
    }

})


document.getElementById('recipt-button').addEventListener('click',function () {
    const getReciptArea = document.getElementById('recipt-section');
    const creatP = document.createElement('p');
    creatP.style.textAlign = "left";
    creatP.style.padding = '10px';
    creatP.innerHTML = `
        <h1>Your All Transation Report</h1>
        <h1>Your Name : Foridul </h1>
        <h2>Your MainBalence : 1200 </h2>
        <h3>You Deposite Balence : 600 </h3>
        <h3>Your Withdraw Balence: 300</h3>
    `
    getReciptArea.appendChild(creatP);
})
