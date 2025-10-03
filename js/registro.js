// 1 passo pegar os inputs
// 2 passo pegar o botton
// 3 passo adc um evento de click
// 4 passo criar a function para guardar os inputs
// 5 passo guardar os valores dos inputs
// 6 passo criar uma variavel de objeto contendo os value dentro
// 7 passo converte JSON usando stringfy do objeto
// 8 passo chamo localstorge.setItem e guardo a conversao


const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const cidadeInput = document.querySelector("#cidade")
const serviceInput = document.querySelector("#service")
const senhaInput = document.querySelector("#senha")
const button = document.querySelector("#continue")


function onSubmit(e) {
  e.preventDefault()
  const nome = nameInput.value
  const login = emailInput.value
  const city = cidadeInput.value
  const servico = serviceInput.value
  const password = senhaInput.value

  const form = { name: nome, email: login, city, service: servico, password }

  const convertForm = JSON.stringify(form)

  localStorage.setItem("Form", convertForm)



}



button.addEventListener("click", onSubmit)

