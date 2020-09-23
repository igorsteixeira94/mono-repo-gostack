import { Op } from 'sequelize';
import * as Yup from 'yup';

import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    const { page = 1, q: nameFilter = null } = req.query;

    if (nameFilter) {
      const recipients = await Recipient.findAll({
        order: ['id'],
        limit: 5,
        offset: (page - 1) * 5,
        where: { name: { [Op.iLike]: `%${nameFilter}%` } },
      });
      return res.json(recipients);
    }
    const recipients = await Recipient.findAll({
      order: ['id'],
      limit: 5,
      offset: (page - 1) * 5,
    });

    return res.json(recipients);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.string().required(),
      complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      cep: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails' });

    const recipient = await Recipient.create(req.body);

    return res.json(recipient);
  }

  async update(req, res) {
    const { id } = req.params;

    const recipient = await Recipient.findByPk(id);

    if (!recipient)
      return res.status(400).json({ error: 'Recipient not found' });

    const schema = Yup.object().shape({
      name: Yup.string(),
      street: Yup.string(),
      number: Yup.string(),
      complement: Yup.string(),
      state: Yup.string(),
      city: Yup.string(),
      cep: Yup.string(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails' });

    await recipient.update(req.body);

    return res.json(recipient);
  }

  async delete(req, res) {
    const { id } = req.params;

    const numberDelete = await Recipient.destroy({ where: { id } });

    if (numberDelete < 1) {
      return res.status(400).json({ error: 'Recipient not found' });
    }
    return res.status(201).json();
  }

  async show(req, res) {
    const { id } = req.params;

    const recipient = await Recipient.findByPk(id);

    return res.json(recipient);
  }
}

export default new RecipientController();
