document.getElementById('formExcluir').addEventListener('submit', function(e) {
    e.preventDefault();

    const id = document.getElementById('id').value;

    fetch(`http://localhost:3000/api/users/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        alert('Usuário excluído com sucesso!');
        document.getElementById('formExcluir').reset();
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao excluir usuário.');
    });
});