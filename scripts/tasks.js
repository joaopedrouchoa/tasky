/*
  TODO: Funcionalidade de adicionar uma nova tarefa.
  TODO: Funcionalidade de remover uma tarefa.
*/

// { id: 4, title: "Task 1", description: ""}

const tasks = [];

function createTask(e) {  
  const title = document.getElementById("title");
  const description = document.getElementById("description");

  tasks.push({
    id: tasks.length + 1,
    title: title.value,
    description: description.value
  });

  let li = document.createElement("li");

  li.textContent = `${title.value} - ${description.value}`;

  var taskContainer = document.getElementById("tasks");

  taskContainer.appendChild(li);
};

function removeTask() {};