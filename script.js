const users = JSON.parse(localStorage.getItem('users')) || []

if(localStorage.getItem('currentUser'))
{
    window.location.href = "dashboard.html"
}

let signupform = document.getElementById("signup")

signupform.addEventListener("submit", function(e)
{
    e.preventDefault();

    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let pass = document.getElementById("password").value;
    let confpass = document.getElementById("confPassword").value;

    let alert = document.getElementById("alert")

    if(name === "")
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Name cannot be EMPTY!"
    }
    else if(email.indexOf('@') == -1)
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Email should contain an '@'"
    }
    else if(pass === "" && confpass === "")
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Password Fields cannot be EMPTY!"
    }
    else if(pass !== confpass)
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Password Missmatch. Try again!"
    }
    else
    {
        const user = {name, email, pass};
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users))

        alert.classList.remove("hide");
        alert.innerHTML = "Form submitted SUCCESSFULLY! Login to CONTINUE!"
        alert.style.color = "green"

        console.log(user);
        console.log(users);
        
        signupform.reset();
    }
});