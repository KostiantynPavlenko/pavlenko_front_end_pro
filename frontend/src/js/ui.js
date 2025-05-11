'use strict';

export function createTask(task) {
  const tasksItem = document.createElement('li');

  let taskCompletedClass = '';

  if (task.status) {
    taskCompletedClass = 'checked';
  }

  tasksItem.innerHTML = `
    <div class="task-checkbox ${taskCompletedClass}" data-id="${task.id}"></div>
    <span class="task-text ${taskCompletedClass}">${task.title}</span>
    <button class="remove-task-button" data-id="${task.id}">remove</button>
  `;

  return tasksItem;
}