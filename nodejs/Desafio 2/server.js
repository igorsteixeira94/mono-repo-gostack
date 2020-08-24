import express from 'express';

// Cria um aplicacao servidor
const app = express();

const projects = [];

// Escuta a porta 3333
app.listen(3333, () => {
  console.log(`Running on http://0.0.0.0:3333`);
});

// Permite o servidor express receber no formato JSON
app.use(express.json());

/* Rota POST - Recebe id e title via body e cadastra no array */
app.post('/projects', (req, res) => {
  const { id, title } = req.body;

  projects.push({ id, title, task: [] });

  return res.json({ id, title });
});

/* Rota GET - Retorna todos os projetos existentes */
app.get('/', (req, res) => {
  return res.json(projects);
});

/* Rota PUT Recebe um id como query params e um title via body */
app.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  projects.forEach((item) => {
    if (item.id === Number(id)) {
      item.title = title;
    }
  });

  return res.json(projects);
});

/* Rota Delete Recebe um id como query params e deleta o projeto */
app.delete('/projects/:id', (req, res) => {
  const { id } = req.params;
  const project = projects.findIndex((item) => item.id === Number(id));
  projects.splice(project, 1);
  return res.json(projects);
});

/* Rota POST projects/:id/tasks Recebe um campo title e armazena a tarefa no array */
app.post('/projects/:id/tasks', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  if (title)
    projects.forEach((item) => {
      if (item.id === Number(id)) {
        item.task.push(title);
      }
    });

  return res.json(projects);
});
