fetch('https://raw.githubusercontent.com/Darndestt/macro/main/alimentos.js')
  .then(response => response.text())
  .then(scriptText => eval(scriptText))
  .catch(error => console.error('Erro ao carregar o script:', error));
