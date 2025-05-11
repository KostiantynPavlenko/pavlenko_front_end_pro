'use strict';
import { TODOS_API_URL } from './config.js';

export async function getTodos() {
  try {
    const response = await fetch(TODOS_API_URL);

    if(!response.ok) {
      throw new Error(`Failed to load todos: ${response.statusText}`)
    }

    return await response.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function addNewTodo(title, status) {
  try {
    const response = await fetch(TODOS_API_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        title,
        status
      })
    });
    
    if(!response.ok) {
      throw new Error(`Failed to add new todo: ${response.statusText}`)
    }

    return response.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function toggleTodo(todoId) {
  try {
    const response = await fetch(`${TODOS_API_URL}/${todoId}`, {
      method: 'PUT'
    });
    
    if(!response.ok) {
      throw new Error(`Failed to toggle todo: ${response.statusText}`)
    }
    
    return response.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function deleteTodo(todoId) {
  try {
    const response = await fetch(`${TODOS_API_URL}/${todoId}`, {
      method: 'DELETE'
    });

    if(!response.ok) {
      throw new Error(`Failed to delete todo: ${response.statusText}`)
    }

  } catch (error) {
    console.error(err);
    throw err;
  }
}