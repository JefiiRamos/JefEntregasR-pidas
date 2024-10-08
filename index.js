document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('nameForm');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = document.getElementById('userName').value;
    
    // Redirecionar para a página de saudação com o nome como parâmetro na URL
    window.location.href = `greeting.html?name=${encodeURIComponent(userName)}`;
  });
});