const express = require('express');
const mongoose = require('mongoose');
const Cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const{
    getTodos,createTodo,deleteTodo,updateTodo
}= require('./controllers/todoController');

//App config
const app = express();

const port = process.env.PORT || 8000;

const connectionURL = process.env.MONGO_URI;

app.use(express.json());

app.use(Cors());

mongoose.connect(connectionURL)
  .then(() => {
    app.listen(port, () => console.log(`Server is running on port: ${port}`));
  })
  .catch((err) => {
    console.log(err);
  });

  app.get('/todos', getTodos)

  app.post('/todos', createTodo)
  app.delete('/todos/:id', deleteTodo)
  app.put('/todos/:id', updateTodo)     