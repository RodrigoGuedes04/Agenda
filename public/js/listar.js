document.addEventListener('DOMContentLoaded', () => {
    const resultadoBusca = localStorage.getItem('resultadoBusca');
    if (resultadoBusca) {
      const usuarios = JSON.parse(resultadoBusca);
      renderizarTabela(usuarios);
      localStorage.removeItem('resultadoBusca'); // limpa
    } else {
      carregarUsuarios(); // carrega todos normalmente
    }
  });

  let usuarios = [];
        
        function carregarUsuarios() {
          fetch('http://localhost:3000/api/users')
            .then(res => res.json())
            .then(data => {
              usuarios = data;
              renderizarTabela(usuarios);
            })
            .catch(err => {
              console.error('Erro ao buscar usuários:', err);
              alert('Erro ao carregar usuários.');
            });
        }
        
        function renderizarTabela(lista) {
          const tbody = document.querySelector('#tabelaUsuarios tbody');
          tbody.innerHTML = '';
        
          lista.forEach(usuario => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
              <td>${usuario.id}</td>
              <td>${usuario.nome}</td>
              <td>${usuario.email}</td>
              <td>${usuario.idade}</td>
              <td>${usuario.telefone}</td>
<td>${new Date(usuario.alterado).toLocaleString()}</td>
            `;
            tbody.appendChild(tr);
          });
        }
        
        function ordenarPor(tipo) {
          let listaOrdenada = [...usuarios];
        
          if (tipo === 'nome') {
            listaOrdenada.sort((a, b) => a.nome.localeCompare(b.nome));
          } else if (tipo === 'mais_recente') {
            listaOrdenada.sort((a, b) => new Date(b.atualizado_em) - new Date(a.atualizado_em));
          } else if (tipo === 'mais_antigo') {
            listaOrdenada.sort((a, b) => new Date(a.atualizado_em) - new Date(b.atualizado_em));
          }
        
          renderizarTabela(listaOrdenada);
        }
        
        // carregar ao abrir a página
        document.addEventListener('DOMContentLoaded', carregarUsuarios);
        
        document.addEventListener('DOMContentLoaded', () => {
  const resultadoBusca = localStorage.getItem('resultadoBusca');
  if (resultadoBusca) {
    const usuarios = JSON.parse(resultadoBusca);
    renderizarTabela(usuarios);
    localStorage.removeItem('resultadoBusca');
  } else {
    carregarUsuarios();
  }
});
  