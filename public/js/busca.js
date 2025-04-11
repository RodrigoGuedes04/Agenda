function buscarContato() {
    const termo = document.getElementById('busca').value;

    if (!termo) return alert("Digite algo para buscar!");

    fetch(`http://localhost:3000/api/users/buscar?q=${encodeURIComponent(termo)}`)
        .then(res => res.json())
        .then(usuarios => {
            localStorage.setItem('resultadoBusca', JSON.stringify(usuarios));
            window.location.href = 'listar.html';
        })
        .catch(err => {
            console.error('Erro na busca:', err);
            alert('Erro ao buscar usuários.');
        });
}