const appContainer = document.querySelector('.app');

const taskContainerElement = document.createElement('div');
const tasksList = document.createElement('ul');
const taskInput = document.createElement('input');
const addTaskButton = document.createElement('button');

taskContainerElement.classList.add('tasks-section');
tasksList.classList.add('tasks-list');
taskInput.classList.add('task-input');
addTaskButton.classList.add('add-task-button');
addTaskButton.textContent = 'Add task';

appContainer.appendChild(taskContainerElement);
taskContainerElement.appendChild(tasksList);
taskContainerElement.appendChild(taskInput);
taskContainerElement.appendChild(addTaskButton);

const tasks = ['Make a dinner', 'Clear room', 'Some task'];

function createTask(taskText) {
  const tasksItem = document.createElement('li');

  tasksItem.innerHTML = `${taskText} <button class="remove-task-button">remove</button>`;
  tasksList.appendChild(tasksItem);
}

function renderTasks(tasks) {
  tasks.forEach(task => createTask(task));
}

renderTasks(tasks);

tasksList.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-task-button')) {
    e.target.closest('li').remove();
  }
});

addTaskButton.addEventListener('click', () => {
  const inputValue = taskInput.value.trim();

  if (inputValue) {
    createTask(inputValue);
    taskInput.value = '';
  }
});



