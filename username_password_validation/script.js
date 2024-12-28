const users = [
    {
        username:"user1",
        password:"123456789"
    },
    {
        username:"user2",
        password:"123456"
    },
    {
        username:"user3",
        password:"123"
    }
]

const message = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click",function(event){
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let loginControl = false;

    for(let i = 0 ; i<users.length ; i++){
        if((users[i].username==username)&&(users[i].password==password)){
            loginControl = true;
            break;
        }
    }

    if(loginControl){
        message.textContent = `Giriş başarılı. Hoş geldin ${username}.`
        message.style.color = "green";
    }else{
        message.textContent = "Giriş başarısız."
        message.style.color = "red";
    }
});