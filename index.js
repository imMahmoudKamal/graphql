import { app } from './src/app.js';

const port = process.env.PORT || 5000;

app
  .listen({
    port,
  })
  .then(({ url }) => console.log(`Server Running at ${url}`));
