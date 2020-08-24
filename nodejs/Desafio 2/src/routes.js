/* Arquivo com definicação das rotas  */
import { Router } from 'express';

import Project from './app/models/Project';

const routes = new Router();

/* Rota POST - Recebe id e title via body e cadastra no array */
routes.post('/projects', async (req, res) => {
  const { id, title } = req.body;

  const project = await Project.create({
    id,
    title,
    tasks: ['Cronograma', 'Test'],
  });

  return res.json(project);
});

/* Rota GET - Retorna todos os projetos existentes */
routes.get('/', async (req, res) => {
  const projects = await Project.findAll();

  return res.json(projects);
});

// Rota PUT Recebe um id como query params e um title via body

routes.put('/projects/:id', async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = await Project.findByPk(id);

  if (!project) {
    return res.status(400).json('Project not found');
  }

  await project.update({ title });
  return res.json(project);
});

// Rota Delete Recebe um id como query params e deleta o projeto
routes.delete('/projects/:id', async (req, res) => {
  const { id } = req.params;
  const project = Project.destroy({ where: { id } });

  return res.status(201).json(project);
});

// Rota POST projects/:id/tasks Recebe um campo title e armazena a tarefa no array
routes.post('/projects/:id/tasks', async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const project = await Project.findByPk(id);

  if (title) {
    if (!project) return res.status(400).json({ error: 'Project not found' });
  }

  const { tasks } = project;
  const newTasks = [...tasks, title];
  await project.update({ tasks: newTasks });

  return res.json(project);
});

export default routes;
