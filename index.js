document.querySelector("form").addEventListener("submit", function(event) {
    const nome = document.querySelector('input[name="Name"]').value.trim();
    const email = document.querySelector('input[name="Email"]').value.trim();

    alert("Formulário enviado com sucesso!");
});
