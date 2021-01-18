const cadastro = document.getElementById("cadastro")
const concluido = document.getElementById("concluido")

cadastro.addEventListener("click", e => {
    const novaTarefa = document.createElement("li")
    const tarefaValor = document.getElementById("tarefa").value

    novaTarefa.appendChild(document.createTextNode(tarefaValor))
    novaTarefa.appendChild(document.createElement('button'))
    novaTarefa.appendChild(document.createElement('button'))

    const listaTarefas = document.getElementsByTagName('ol')[0]
    const listaItens = document.getElementsByTagName('li')
    const listaBtnDel = document.getElementsByTagName('button')
    const listReady = document.getElementsByTagName('button')
    listaTarefas.insertBefore(novaTarefa, listaItens[0], listaBtnDel[0], listReady[0])

})

//remover.addEventListener("click", e => {


//})

//concluido.addEventListener("click", e => {

//})