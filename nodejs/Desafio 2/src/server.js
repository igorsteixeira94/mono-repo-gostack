import app from './app';

// Escuta a porta 3333
app.listen(3333, () => {
  console.log(`Running on http://0.0.0.0:3333`);
});
