document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var email = document.getElementById("email").value;
    var nome = document.getElementById("nome").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem1  = document.getElementById("mensagem").value;

  
    if (email.trim() === "" || assunto.trim() === "" || nome.trim() === ""| mensagem1.trim() === "") {
      alert("Por favor, preencha todos os campos.");
      
      return;
    }
  
    var mensagem = "Assunto: " + assunto;
  

    document.getElementById("mensagemTrue").textContent = "Email enviado para " + email +  "," + mensagem;
  });
  