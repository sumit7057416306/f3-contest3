console.log("Users");
const users = JSON.parse(localStorage.getItem('users')) || []
console.log(users);

let loginform = document.getElementById("login");

loginform.addEventListener('submit', function(e)
{
    e.preventDefault()

    let email = document.getElementById("Email").value;
    let pass = document.getElementById("password").value;

    let alert = document.getElementById("alert-msg")

    const user = users.find(user => user.email === email && user.pass === pass)
    console.log(user);

    if(email === "")
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Email Required"
    }
    else if(email.indexOf('@') == -1)
    {
        console.log("Email should contain an @");
        alert.classList.remove("hide");
        alert.innerHTML = "Email should contain an '@'"
    }
    else if(pass === "")
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Password Required"
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
