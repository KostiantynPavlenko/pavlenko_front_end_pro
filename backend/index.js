const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

function genereteTodoId() {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;
}

const todoTasks = [
  {
    id: genereteTodoId(),
    title: "Make homework",
    status: false
  },
  {
    id: genereteTodoId(),
    title: "Clear room",
    status: true
  }
];

app.get('/tasks', (req, res) => {
  res.json(todoTasks);
});

app.post('/tasks', (req, res) => {
  const { title, status } = req.body;

  if(!title) {
    return res.status(400).json({error: "Not all information given"});
  }

  const newTodo = {
    id: genereteTodoId(),
    title,
    status
  }

  todoTasks.push(newTodo);

  res.status(201).json(newTodo);
});

app.put('/tasks/:id', (req, res) => {
  const todoId = +req.params.id;
  
  const todoIndex = todoTasks.findIndex(todo => {
    return todo.id === todoId;
  });

  if (todoIndex === -1) {
    return res.status(404).json({error: 'Task not found'});
  }

  todoTasks[todoIndex].status = !todoTasks[todoIndex].status;

  res.status(200).json(todoTasks[todoIndex]);
});

app.delete('/tasks/:id', (req, res) => {
  const todoId = +req.params.id;

  const todoIndex = todoTasks.findIndex(todo => {
    return todo.id === todoId;
  });

  if (todoIndex === -1) {
    return res.status(404).json({error: 'Task not found'});
  }

  todoTasks.splice(todoIndex, 1);

  res.status(204).send();
});

app.listen(PORT, () => {
});
