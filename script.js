//const tarefa = document.getElementById("tarefa")
const cadastro = document.getElementById("cadastro")
const remover = document.getElementById("remover")
const concluido = document.getElementById("concluido")

cadastro.addEventListener("click", e => {
    //document.getElementById("item").innerText = 'Item1'
    const novaTarefa = document.createElement("li")
    const tarefaValor = document.getElementById("tarefa").value
    novaTarefa.appendChild(document.createTextNode(tarefaValor))

    const listaTarefas = document.getElementsByTagName('ol')[0]
    const listaItens = document.getElementsByTagName('li')
    listaTarefas.insertBefore(novaTarefa, listaItens[0])

})

remover.addEventListener("click", e => {
    document.getElementById("item").innerHTML = ""
    document.getElementById("item").style.background = "#FFFFFF"
})

concluido.addEventListener("click", e => {
    document.getElementById("item").style.background = "#FF0000"
})