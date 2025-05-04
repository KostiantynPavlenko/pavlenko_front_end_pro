const appContainer = document.querySelector('.app');

const taskContainerElement = document.createElement('div');
const tasksList = document.createElement('ul');
const addTaskContainer = document.createElement('div');
const taskInput = document.createElement('input');
const addTaskButton = document.createElement('button');

taskContainerElement.classList.add('tasks-section');
tasksList.classList.add('tasks-list');
addTaskContainer.classList.add('task-add-wrapper');
taskInput.classList.add('task-input');
addTaskButton.classList.add('add-task-button');
addTaskButton.textContent = 'Add task';

appContainer.appendChild(taskContainerElement);
taskContainerElement.appendChild(addTaskContainer);
addTaskContainer.appendChild(taskInput);
addTaskContainer.appendChild(addTaskButton);
taskContainerElement.appendChild(tasksList);

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function createTask(task) {
  const tasksItem = document.createElement('li');
  const taskCheckboxElement = document.createElement('div');
  const taskTextElement = document.createElement('span');
  const taskRemoveButton = document.createElement('button');

  taskCheckboxElement.classList.add('task-checkbox');
  taskCheckboxElement.setAttribute('data-id', task.id);

  taskTextElement.classList.add('task-text');
  taskTextElement.textContent = task.value;

  taskRemoveButton.classList.add('remove-task-button');
  taskRemoveButton.setAttribute('data-id', task.id);
  taskRemoveButton.textContent = 'remove';

  if (task.status) {    
    taskCheckboxElement.classList.add('checked');
    taskTextElement.classList.add('checked');
  }

  tasksItem.appendChild(taskCheckboxElement);
  tasksItem.appendChild(taskTextElement);
  tasksItem.appendChild(taskRemoveButton);
  
  tasksList.appendChild(tasksItem);
}

function renderTasks(tasks) {
  tasks.forEach(task => createTask(task));
}

tasksList.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-task-button')) {
    const taskId = +e.target.dataset.id;

    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    e.target.closest('li').remove();
  }

  if (e.target.classList.contains('task-checkbox')) {
    const taskId = +e.target.dataset.id;
    const li = e.target.closest('li');
    const taskTextElement = li.querySelector('.task-text');
    
    e.target.classList.toggle('checked');
    taskTextElement.classList.toggle('checked');
    
    tasks.forEach(task => {
      if (task.id === taskId) {
        task.status = e.target.classList.contains('checked');
      }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
});

addTaskButton.addEventListener('click', () => {
  const inputValue = taskInput.value.trim();

  if (inputValue) {
    const taskId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;
    const task = {
      id: taskId,
      value: inputValue,
      status: false,
    }
    
    tasks.push(task)
    createTask(task);
    taskInput.value = '';

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
});

renderTasks(tasks);


