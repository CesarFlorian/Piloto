const users = [

    {
        username:"operator",
        password:"1234",
        role:"operator"
    },
    {
       username:"manager",
       password:"1234",
       role:"manager"
    }
    





];

const loginForm = document.getElementById("loginForm")

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find (u => 

        u.username === username &&
        u.password === password
    );

    if(user){
               
        localStorage.setItem(
            "currentUser",
            JSON.stringify(user)

        );

    if(user.role === "operator")
        {
           window.location.href =
              "pages/operator/dashboard.html"
              

        }

    if(user.role === "manager")
        {
           window.location.href =
              "pages/manager/dashboard.html"

        }
    else{

        document.getElementById("errorMessage").textContent = "Usuario o Contraseña incorrecto";

               

        }


    }
});