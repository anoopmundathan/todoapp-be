import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { todos } from './todos';

(async () => {
  const app = express();
  const port = process.env.PORT || 8000;

  app.use(bodyParser.json());
  
  app.get( "/", async (req: Request, res: Response) => {
    res.status(200).send("Welcome to Todo App");
  });
  
  // /todos
  app.get("/todos", (req: Request, res: Response) => {
    res.status(200).send(todos);
  });

  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();
