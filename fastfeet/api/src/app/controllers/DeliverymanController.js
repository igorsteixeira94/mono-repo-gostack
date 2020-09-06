import * as Yup from 'yup';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

export default new (class DeliverymanController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name, email } = req.body;

    const deliverymanExists = await Deliveryman.findOne({ where: { email } });

    if (deliverymanExists) {
      return res.status(400).json({ error: 'Deliveryman already exists' });
    }

    const deliveryman = await Deliveryman.create({ name, email });
    return res.json(deliveryman);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      avatar_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;

    const deliverymanExists = await Deliveryman.findByPk(id);

    if (!deliverymanExists) {
      return res.status(400).json({ error: 'Deliveryman not found' });
    }

    if (req.body.email && req.body.email !== deliverymanExists.email) {
      if (await Deliveryman.findOne({ where: { email: req.body.email } })) {
        return res
          .status(400)
          .json({ error: 'Email already registed at other deliveryman' });
      }
    }
    deliverymanExists.update(req.body);
    await deliverymanExists.save();
    return res.json(deliverymanExists);
  }

  async index(req, res) {
    const { page = 1 } = req.query;
    const deliverymans = await Deliveryman.findAll({
      attributes: ['id', 'name', 'email'],
      include: { model: File, as: 'avatar', attributes: ['path', 'url'] },
      limit: 10,
      offset: (page - 1) * 20,
    });

    return res.json(deliverymans);
  }

  async delete(req, res) {
    const { id } = req.params;

    const numberDelete = await Deliveryman.destroy({ where: { id } });

    if (numberDelete < 1) {
      return res.status(400).json({ error: 'Deliveryman not found' });
    }
    return res.status(201).json();
  }
})();
