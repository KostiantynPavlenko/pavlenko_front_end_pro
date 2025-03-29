const appContainer = document.querySelector('.app');
const taskContainerElement = document.createElement('div');

taskContainerElement.classList.add('tasks-section');
appContainer.appendChild(taskContainerElement);


const tasks = ['Make a dinner', 'Clear room'];

function renderTasksSection(tasks) {
  const tasksListTag = document.createElement('ul');
  const taskInputTag = document.createElement('input');
  const addTaskButton = document.createElement('button');

  tasksListTag.classList.add('tasks-list');
  taskInputTag.classList.add('task-input');
  addTaskButton.classList.add('add-task-button');
  addTaskButton.textContent = 'Add task';

  tasks.forEach(taskText => {
    const tasksItemTag = document.createElement('li');

    tasksItemTag.innerHTML = `${taskText} <button class="remove-task-button">remove</button>`;
    tasksListTag.appendChild(tasksItemTag);
  })

  taskContainerElement.appendChild(tasksListTag);
  taskContainerElement.appendChild(taskInputTag);
  taskContainerElement.appendChild(addTaskButton);
}

renderTasksSection(tasks);

const tasksList = document.querySelector('.tasks-list');
const addTaskButton = document.querySelector('.add-task-button');

tasksList.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-task-button')) {
    e.target.closest('li').remove();
  }
});

addTaskButton.addEventListener();



