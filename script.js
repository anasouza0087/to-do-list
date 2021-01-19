const showTasks = document.getElementById("cadastro")
    //const btnDel = document.getElementsByTagName("button")
    //const buttonDone = document.getElementsByTagName("button")

showTasks.addEventListener("click", e => {
    const newTask = document.createElement("li")
    const taskValue = document.getElementById("tarefa").value

    newTask.appendChild(document.createTextNode(taskValue))
        //newTask.appendChild(document.createElement("button"))

    const taskList = document.getElementsByTagName("ol")[0]
    const taskItems = document.getElementsByTagName("li")

    taskList.insertBefore(newTask, taskItems[0])
})