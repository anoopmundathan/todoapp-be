import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import { todos } from './todos';
import { addTodo, generateNewTodo, getTodoById, updateTodoById } from './todos/todoHelpers';

(async () => {
  const app = express();
  const port = process.env.PORT || 8000;

  app.use(bodyParser.json());

  app.get( "/", async (req: Request, res: Response) => {
    res.status(200).send("Welcome to Todo App");
  });

  // GET - todos
  app.get("/api/todos", async (req: Request, res: Response) => {
    res.status(200).send(todos);
  });

  // GET - todos by id
  app.get("/api/todos/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
      res.status(400).send('id is required');
    }

    const filteredTodos = getTodoById(todos, parseInt(id, 10));

    if (filteredTodos && filteredTodos.length === 0) {
      return res.status(404).send('Todo is not found');
    }

    res.status(200).send(filteredTodos);

  });

  // POST - new todos
  app.post("/api/todos", async (req: Request, res: Response) => {
    const { name } = req.body;

    if (!name) {
      return res.status(400).send("Todo name is missing");
    }
    const newTodo = generateNewTodo(name);
    addTodo(todos, newTodo);
    res.status(201).send(newTodo);
  });

  // PUT - update todo completed status
  app.put("/api/todos/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

    if(!id) {
      res.status(400).send('id is required');
    }

    const parsedId = parseInt(id, 10);
    updateTodoById(todos, parsedId);
    res.status(200).send(getTodoById(todos, parsedId));

  });

  app.listen( port, () => {
    /*tslint:disable*/
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();
