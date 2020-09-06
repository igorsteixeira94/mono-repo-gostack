import * as Yup from 'yup';
import Parcel from '../models/Parcel';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';
import File from '../models/File';
import Mail from '../../lib/Mail';

export default new (class ParcelController {
  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().integer().required(),
      deliveryman_id: Yup.number().integer().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { recipient_id, deliveryman_id, product } = req.body;

    if (!(await Deliveryman.findByPk(deliveryman_id))) {
      return res.status(400).json({ error: "Deliveryman don't exist" });
    }

    if (!(await Recipient.findByPk(recipient_id))) {
      return res.status(400).json({ error: "Recipient don't exist" });
    }

    const parcel = await Parcel.create({
      recipient_id,
      deliveryman_id,
      product,
    });

    return res.json(parcel);
  }

  async index(req, res) {
    const { page = 1 } = req.query;
    const parcels = await Parcel.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      limit: 10,
      offset: (page - 1) * 10,
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['id', 'name', 'email'],
          include: { model: File, as: 'avatar' },
        },
      ],
    });

    return res.json(parcels);
  }

  async show(req, res) {
    const parcels = await Parcel.findByPk(req.params.id, {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['id', 'name', 'email'],
          include: { model: File, as: 'avatar' },
        },
      ],
    });

    if (!parcels) return res.status(400).json({ error: "Parcel don't exist" });

    await Mail.sendMail({
      to: `${parcels.deliveryman.name} <${parcels.deliveryman.email}>`,
      subject: 'Nova entrega',
      text: 'Você tem uma nova entrega',
    });
    return res.json(parcels);
  }

  async update(req, res) {
    const { id } = req.params;

    const schema = Yup.object().shape({
      recipient_id: Yup.number().integer(),
      deliveryman_id: Yup.number().integer(),
      product: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const parcels = await Parcel.findByPk(id, {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['id', 'name', 'email'],
          include: { model: File, as: 'avatar' },
        },
      ],
    });

    if (!parcels) return res.status(400).json({ error: "Parcel don't exist" });

    if (req.params.deliveryman_id !== parcels.deliveryman_id) {
      if (
        req.body.deliveryman_id &&
        !(await Deliveryman.findByPk(req.body.deliveryman_id))
      ) {
        return res.status(400).json({ error: "Deliveryman don't exist" });
      }
    }

    if (req.params.recipient_id !== parcels.recipient_id) {
      if (
        req.body.recipient_id &&
        !(await Recipient.findByPk(req.body.recipient_id))
      ) {
        return res.status(400).json({ error: "Recipient don't exist" });
      }
    }

    parcels.update(req.body);
    await parcels.save();

    return res.json(parcels);
  }

  async delete(req, res) {
    const { id } = req.params;
    const parcelDeleteSucess = await Parcel.destroy({ where: { id } });

    if (parcelDeleteSucess < 1) {
      return res.status(400).json({ error: "Parcel don't exist" });
    }

    return res.status(201).json();
  }
})();
