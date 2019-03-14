
const usersArray = [];

const registerForm = document.getElementById("registerForm");

function regUser(){
    registerForm.addEventListener("submit",(event)=>{
        event.preventDefault();
        user = {
                firstName : this.fname.value,
                lastName : this.lname.value,
                email : this.email.value,
                password : this.password.value,
                isAccepted : this.terms.value
            };
            if(user.email ===""){

            }
            usersArray.push(user);
            console.log(usersArray);
    });
}
regUser();
