'use strict';
import { getTodos, addNewTodo, toggleTodo, deleteTodo } from "./api.js";
import { createTask } from "./ui.js";

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

function renderTaks(task) {
  tasksList.appendChild(task)
}

async function init() {
  const todos = await getTodos();

  todos.forEach(task => {
    renderTaks(createTask(task));
  });
}

tasksList.addEventListener('click', async (e) => {
  if (e.target.classList.contains('remove-task-button')) {
    const taskId = +e.target.dataset.id;

    try {
      await deleteTodo(taskId);

      e.target.closest('li').remove();
    } catch (error) {
      console.error(error);
    }
  }

  if (e.target.classList.contains('task-checkbox')) {
    const taskId = +e.target.dataset.id;
    const li = e.target.closest('li');
    const taskTextElement = li.querySelector('.task-text');

    try {
      await toggleTodo(taskId);
      
      e.target.classList.toggle('checked');
      taskTextElement.classList.toggle('checked');
    } catch (error) {
      console.error(error);
    }    
  }
});

addTaskButton.addEventListener('click', async () => {
  const inputValue = taskInput.value.trim();

  if (inputValue) {
    try {
      const todoData = await addNewTodo(inputValue, false);

      renderTaks(createTask(todoData));
    } catch (error) {
      console.error(error);
    }

    taskInput.value = '';
  }
});

// Main

init();

