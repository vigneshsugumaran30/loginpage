 var loginBox=document.getElementById("login");
var regBox=document.getElementById("register");
var forgotBox=document.getElementById("forgot");
var loginTab=document.getElementById("lt");
var regTab=document.getElementById("rt");

var emailArray=[];
var passwordArray=[];

function loginTabFun()
{
    event.preventDefault();
    loginBox.style.visibility="visible";
    regBox.style.visibility="hidden";
    forgotBox.style.visibility="hidden";
    loginTab.style.backgroundColor="rgb(181, 181, 243)";
}
function registerTabFun()
{
    event.preventDefault();
    loginBox.style.visibility="hidden";
    regBox.style.visibility="visible";
    forgotBox.style.visibility="hidden";
    regTab.style.backgroundColor="rgb(181, 181, 243)";
}
function login()
{
    event.preventDefault();
    var email=document.getElementById("se").value;
    var password=document.getElementById("sp").value;
    var i=(emailArray.indexOf(email));
    if(emailArray.indexOf(email) == -1)
    {
        if(email == "")
        {
            alert("email required");
            return;
        }
        alert("Email doesn't exit");
        return;
    }
 
        else if(passwordArray[i] != password)
        {
            if(password == "");
        {
            alert("password required");
            return;
        }
        alert("password doesn't match");
        return;
        }
        else{
            alert(email + "Login successfull welcome");
            document.getElementById('se').value="";
            document.getElementById('sp').value="";
        }
    
}
function Register()
{
    event.preventDefault();
    var email=document.getElementById("re").value;
    var password=document.getElementById("rp").value;
    var passwordRetype=document.getElementById("rrp");
    if(email=="")
    {
        alert("Email required.");
        return;
    }
    else if(password=="")
    {
        alert("Password required");
        return;
    }
    else if(password=="")
    {
        alert("Password required");
        return;
    }
    else if(password !=password)
    {
        alert("password doesn't match re-type");
        return;
    }
    else if(emailArray.indexOf(email) == -1)
    {
        emailArray.push(email);
        passwordArray.push(password);
        alert(email + " Thanks for registeration \n Try to login Now");
    }
    else
    {
        alert("Enter the detail properly");
    }
}
function forgotpass()

{
    event.preventDefault();
        var email = document.getElementById("re").value;

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("Email required.");
            return ;
        }
        alert("Email does not exist.");
        return ;
    }

    alert("email is send to your email check it in 24hr. \n Thanks");
    document.getElementById("fe").value ="";
}
