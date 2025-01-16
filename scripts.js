document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    // Obtém os valores dos campos do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Exibe uma mensagem de confirmação
    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);

    // Aqui você pode adicionar código para enviar os dados do formulário para um servidor
    // ou processá-los de outra forma
});
