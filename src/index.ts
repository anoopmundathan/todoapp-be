import express from "express";

const app = express();

const port = process.env.PORT || 8000;

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log( `Server running at http://localhost:${ port }` );
} );
