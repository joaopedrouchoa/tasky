/*
  TODO: Funcionalidade de adicionar uma nova tarefa.
  TODO: Funcionalidade de remover uma tarefa.
*/

// { id: 4, title: "Task 1", description: ""}

const tasks = [];

function loadTasks() {
  const tasksMock = [
    {
      id: 1,
      title: "Task 1",
      description: "Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Todo mundo vê os porris que eu tomo."
    },
    {
      id: 2,
      title: "Task 2",
      description: "Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Todo mundo vê os porris que eu tomo."
    },
    {
      id: 3,
      title: "Task 3",
      description: "Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Todo mundo vê os porris que eu tomo."
    },
    {
      id: 4,
      title: "Task 4",
      description: "Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Todo mundo vê os porris que eu tomo."
    },
  ];

  for(const task of tasksMock) {
    let taskDiv = document.createElement("div");
    taskDiv.className = "task";
    taskDiv.innerHTML = `<h2 class="task-title">${task.title}</h2><p class="task-description">${task.description}</p>`;

    const tasksSection = document.getElementById("tasks");

    tasksSection.appendChild(taskDiv);
  };
};

function createTask() {  
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

function removeTask() {

};

loadTasks();