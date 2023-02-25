

const currentUser = JSON.parse(localStorage.getItem('currentUser'))



if(!currentUser)
{
    window.location.href = "login.html"
}

let username = document.getElementById("username")
let useremail = document.getElementById("useremail")
let alert = document.getElementById("alert")

username.innerHTML = currentUser.name;
useremail.innerHTML = currentUser.email;

let changepassform = document.getElementById("change-pass")

changepassform.addEventListener("submit", function(e)
{
    e.preventDefault();

    let oldpass = document.getElementById("oldpass").value
    let newpass = document.getElementById("newpass").value
    let confnewpass = document.getElementById("conf-newpass").value

    if(oldpass === "")
    {
        alert.classList.remove("hide");
        console.log("Enter PASS");
        alert.innerHTML = "Enter old pass to proceed"
    }
    if(oldpass !== currentUser.pass)
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Old Password Missmatch!"
    }
    else if(newpass === "" || confnewpass === "")
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Passwords Required!"   
    }
    else if(newpass !== confnewpass)
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Passwords Missmatch!"
    }
    else
    {
        currentUser.pass = newpass;
        localStorage.setItem('currentUser', JSON.stringify(currentUser))

        const users = JSON.parse(localStorage.getItem('users'))
        let userIndex = users.findIndex(user => user.email === currentUser.email)

        if(users[userIndex].pass === oldpass)
        {
            users[userIndex].pass = newpass
            localStorage.setItem('users', JSON.stringify(users))
        }

        alert.classList.remove("hide");
        alert.innerHTML = "Password changed SUCCESSFULLY!"
        alert.style.color = "green"

        changepassform.reset()
    }
})

let logoutbutton = document.getElementById("logout")

logoutbutton.addEventListener("click", function()
{
    localStorage.removeItem('currentUser')
    window.location.href = "index.html"
})