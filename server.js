import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`listening on port ${port}`);
  console.log(`http://localhost:${port}`);
});
