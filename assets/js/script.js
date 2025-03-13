// Plugins
function alert(alertTxt) {
  Swal.fire(alertTxt);
}

// Seleção de elementos
const btnAdd = document.querySelector(".btn-add");
const btnClear = document.querySelector(".btn-clear");
const inputField = document.querySelector(".input");
const taskList = document.querySelector(".task-list");

// Função para criar a task
const createTaskElement = (task) => {
  const newTask = document.createElement("li");
  newTask.classList.add("taskItem");

  const taskText = document.createElement("span");
  taskText.classList.add("task-text");
  taskText.textContent = task;

  const removeBtn = document.createElement("span");
  removeBtn.innerHTML = `<i class="bi bi-trash"></i>`;
  removeBtn.classList.add("btn-remove");

  newTask.append(taskText, removeBtn);

  // Eventos de remoção e conclusão
  removeBtn.addEventListener("click", () => newTask.remove());
  newTask.addEventListener("click", () =>
    newTask.classList.toggle("completed")
  );

  return newTask;
};

// Função para adicionar uma nova task
const addTask = () => {
  const task = inputField.value.trim();
  if (!task) return alert("Digite uma tarefa");
  if (task.length > 20) return alert("No máximo 20 caracteres");

  const newTask = createTaskElement(task);
  taskList.prepend(newTask);
  inputField.value = "";
};

// Função para limpar todas as tasks
const clearTasks = () => {
  taskList.innerHTML = "";
  inputField.value = "";
};

// Associação dos eventos aos elementos
btnAdd.addEventListener("click", addTask);
inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

btnClear.addEventListener("click", clearTasks);
