document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    // Exemplo de validação básica (substitua por validação real)
    if (username === "admin" && password === "1234") {
        alert("Login bem-sucedido!");
        // Aqui você pode redirecionar o usuário para outra página
        // window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "Usuário ou senha incorretos!";
    }
});
