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
  