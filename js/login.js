// 1 passo pegar o input do email e password
// 2 passo pegar o botao
// 3 passo adc evento no botao
// 4 passo criar function de verificacao
// 5 passo adc o evento preventdefault
// 6 passo pegar os value do email e senha para verificaçao
// 7 passo chamar o localstorge com a chave
// 8 passo converter a chave para objeto
// 9 passo se a verficacao for correcta entra no home, se nao cria um alert


const emailInput = document.querySelector("#email")
const senhaInput = document.querySelector("#senha")
const button = document.querySelector("#buttonLogin")

function handleLogin(event) {
  event.preventDefault()
  const email = emailInput.value
  const password = senhaInput.value
  const formsStorge = localStorage.getItem("Form")
  const converteForm = JSON.parse(formsStorge)


  if (converteForm.email === email && converteForm.password === password) {
    window.location.replace("/views/home.html")
  } else {
    alert("Invalid login")
  }


}

button.addEventListener("click", handleLogin)
