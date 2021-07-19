const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome = document.getElementById('nome').value
  let email = document.getElementById('email').value
  let data = { nome, email }

  let convertData = JSON.stringify(data)

  localStorage.setItem('leads', convertData)

  // implementando o visual de carregamento do lead cadastrado  
  let content = document.getElementById('content')

  let carregando = ` <p style="color: white; text-align: center;"> Carregando ... </p>`

  let pronto = `<p style="color: white; text-align: center;"> Cadastrado com sucesso!</p>`

  content.innerHTML = carregando

  setTimeout(() => {
    content.innerHTML = pronto
  }, 1000)

  setTimeout(() => {
    location.reload()
  }, 2000)

})