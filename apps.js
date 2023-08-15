document.getElementById('login-button').addEventListener('click',function () {
    const getEmailValue = document.getElementById('emain-fild');
    const getPasswordValue = document.getElementById('password-fild');
    
    if (getEmailValue.value === "foridul@gmail.com" && getPasswordValue.value === "foridul1234") {
        window.location.href = "./Dasboard/index.html";
    }else{
      document.getElementById('login-button').addEventListener('click',function (params) {
        
        const getVAlidation = document.getElementById('modal-validation');
        getVAlidation.click();
      })

    }
})