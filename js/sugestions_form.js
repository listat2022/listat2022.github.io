const btn = document.querySelector("#send")
const inputs = document.querySelector("form")

btn.addEventListener('click',()=> {
    if (isValid()){
    Email.send({
      Host: "",
      username:"",
      password: "",
      To: "listat2022@gmail.com",
      From: "listat2022@gmail.com",
      Subject: "Recebeu uma mensagem através do site ListaT2022",
      Body: "Mensagem: " + inputs.elements["message"].value
      }).then(document.getElementById("contactForm").reset());
}});

function isValid(){
    var valid = true;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
  
    error_message.style.padding = "10px";
  
    var text;
    
    if(message.length <= 0){
      text = "Escreva uma mensagem";
      error_message.innerHTML = text;
      error_message.style.backgroundColor = "#f44336";
      return false;
    } 
    error_message.innerHTML = "Mensagem enviada com sucesso";
    error_message.style.backgroundColor = "rgb(75,181,67)";
    return valid;
};