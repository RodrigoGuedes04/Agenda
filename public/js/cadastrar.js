// Atualiza a hora local no formulário
function mostrarHoraAtual() {
    const agora = new Date();
    const horaLocal = agora.toLocaleString(); // Formato local: DD/MM/AAAA HH:MM
    document.getElementById('horaCadastro').textContent = horaLocal;
}

mostrarHoraAtual(); // Mostra a hora quando a página carrega

// Envia o cadastro
document.getElementById('formCadastro').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = parseInt(document.getElementById('idade').value);
    const telefone = document.getElementById('telefone').value;

    fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, email, idade, telefone })
    })
    .then(res => res.json())
    .then(data => {
        alert('Usuário cadastrado com sucesso!');
        document.getElementById('formCadastro').reset();
        mostrarHoraAtual(); // Atualiza a hora após novo cadastro
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao cadastrar usuário.');
    });
});