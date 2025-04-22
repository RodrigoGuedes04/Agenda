// Atualiza a hora local
function mostrarHoraAtual() {
    const agora = new Date();
    const horaLocal = agora.toLocaleString(); // Ex: 09/04/2025 14:40
    document.getElementById('horaEdicao').textContent = horaLocal;
}

mostrarHoraAtual(); // Mostra ao abrir

// Envia o formulário
document.getElementById('formEditar').addEventListener('submit', function(e) {
    e.preventDefault();

    const id = document.getElementById('id').value;
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = parseInt(document.getElementById('idade').value);
    const telefone = document.getElementById('telefone').value;

    fetch(`http://localhost:3000/api/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, email, idade, telefone })
    })
    .then(res => res.json())
    .then(data => {
        alert('Usuário editado com sucesso!');
        document.getElementById('formEditar').reset();
        mostrarHoraAtual(); // Atualiza a hora após edição
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao editar usuário.');
    });
});