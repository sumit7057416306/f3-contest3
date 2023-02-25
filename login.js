console.log("Users");
const users = JSON.parse(localStorage.getItem('users')) || []
console.log(users);

let loginform = document.getElementById("login");

loginform.addEventListener('submit', function(e)
{
    e.preventDefault()

    let email = document.getElementById("email").value;
    let pwd = document.getElementById("password").value;

    let alert = document.getElementById("alert")

    const user = users.find(user => user.email === email && user.pwd === pwd)
    console.log(user);

    if(email === "")
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Email cannot be EMPTY!"
    }
    else if(email.indexOf('@') == -1)
    {
        console.log("Email should contain an @");
        alert.classList.remove("hide");
        alert.innerHTML = "Email should contain an '@'"
    }
    else if(pwd === "")
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Password cannot be EMPTY!"
    }
    else if(!user)
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Invalid Email or Password!"
    }
    else
    {
        const currentUser = { ...user, token: generateToken()};
        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        window.location.href = 'dashboard.html';
    }
});

function generateToken()
{
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let token = ''
    for(let i = 0; i < 16; i++)
    {
        token += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    return token;
}

if(localStorage.getItem('currentUser'))
{
    window.location.href = "dashboard.html"
}