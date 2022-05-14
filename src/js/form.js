
/************** ************************* register js********************************* */
// save user info into cookis *additional not requred*
 let save=function(firstname,lastname,password,email)
 {
   
 
    let date=new Date;
    date.setMonth(date.getMonth+2); 
    document.cookie=`username=${firstname+lastname};password=${password};email=${email};expires=${date}`;
  
 }
 //check if password equal confirm password 
 let ch=function(password,cpassword)
 {
    if(password != cpassword || password == "" ||cpassword==""){
        alert(`Confirm password and password Needed and must be equal `);
        document.getElementById("cp").innerHTML="";
        return false;
        }   
        return true;
 }
 //show massege after finsh registretion 
  show=function()
 {
const ms=document.createElement('div');
var a = document.createElement('a');
var linkText = document.createTextNode("log-in");
      a.appendChild(linkText);
      a.title = "login";
      a.href = "../sign-in.html";
let cont=document.createTextNode(`thanks for registretion now you can go to this page to log in >>${a} `);
ms.appendChild(cont);
document.body.appendChild(ms);

}
let r=show2=function()
{
const ms=document.createElement('div');
var a = document.createElement('a');
let cont=document.createTextNode(`Welcome fci `);
ms.appendChild(cont);
document.body.appendChild(ms);

}
// Main ffubction
function check() {
    let firstname= document.getElementById("fn").value;
    let lastname= document.getElementById("ln").value;
       let password=document.querySelector(`input[type=password]`).value;
       let cpassword=document.getElementById("cp").value;
       let email=document.querySelector(`input[type=email]`).value;
       let phone=document.querySelector(`input[type=tel]`).value;
       let gender=document.querySelector(`input[type=radio]`).value;
       
      ch(password,cpassword);
      if(ch) {save(firstname,lastname,password,email); }
      
    }
//check if user mail and passowrd matched with data base ** I use fake name to check**
function log_in_check()
{
    if(document.querySelector(`input[type=password]`).value=='12345' && document.querySelector(`input[type=email]`).value=='fci@gmail')
    {
       r();
    }
    else
    {
       alert("Wrong password or mail");
    }
}

