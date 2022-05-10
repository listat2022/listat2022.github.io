const btn = document.querySelector("#send")
const inputs = document.querySelector("form")

btn.addEventListener('click',()=> {
    if (isValid()){
    Email.send({
      SecureToken:"",
      To: "listat2022@gmail.com",
      From: "listat2022@gmail.com",
      Subject: inputs.elements["email"].value + " enviou uma mensagem através do site ListaT2022",
      Body: "Nome: " + inputs.elements["name"].value + "<br>"+ "Contacto: " + inputs.elements["phone"].value + "<br>" + "Mensagem: " + inputs.elements["message"].value
      }).then(document.getElementById("contactForm").reset());
}});

function isValid(){
    var valid = true;
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
  
    error_message.style.padding = "10px";
  
    var text;
    if(name.length <= 0){
      text = "Nome inválido";
      error_message.innerHTML = text;
      error_message.style.backgroundColor = "#f44336";
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "E-mail inválido";
      error_message.innerHTML = text;
      error_message.style.backgroundColor = "#f44336";
      return false;
    }
    if(isNaN(phone) || phone.length != 9){
      text = "Contacto inválido";
      error_message.innerHTML = text;
      error_message.style.backgroundColor = "#f44336";
      return false;
    }
    if(message.length <= 0){
      text = "Todos os campos têm de ser preenchidos";
      error_message.innerHTML = text;
      error_message.style.backgroundColor = "#f44336";
      return false;
    } 
    error_message.innerHTML = "Mensagem enviada com sucesso";
    error_message.style.backgroundColor = "rgb(75,181,67)";
    return valid;
};