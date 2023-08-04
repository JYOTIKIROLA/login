const forms=document.querySelector(".forms");
 const  pwShowHide=document.querySelectorAll(".eye-icon");
 const links=document.querySelectorAll(".link");

 pwShowHide.forEach(eyeIcon=>{
    eyeIcon.addEventListener("click",()=>{
        let pwFields=eyeIcon.parentElement.parentElement.querySelector(".password");
        
        pwFields.forEach(password=>{
            if(password.type==="password"){
                password.type="text";
                eyeIcon.classList.replace("bx-show","bx-hide");
                return;

            }
            password.type="password";
            eyeIcon.classList.replace("bx-show","bx-hide");
            
            
        })
    })
 })