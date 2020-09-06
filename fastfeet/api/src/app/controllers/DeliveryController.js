import { Op } from 'sequelize';
import * as Yup from 'yup';
import {
  setSeconds,
  setMinutes,
  setHours,
  startOfDay,
  endOfDay,
} from 'date-fns';
import isWithinInterval from 'date-fns/isWithinInterval';

import Parcel from '../models/Parcel';

export default new (class DeliveryController {
  async index(req, res) {
    const { deliveryman_id } = req.params;
    const { delivered = false } = req.query;

    if (delivered) {
      const parcels = await Parcel.findAll({
        where: {
          deliveryman_id,
          canceled_at: null,
          signature_id: { [Op.ne]: null },
        },
        order: [['end_date', 'DESC']],
      });

      return res.json(parcels);
    }

    const parcels = await Parcel.findAll({
      where: { deliveryman_id, canceled_at: null, signature_id: null },
      order: [['created_at', 'DESC']],
    });

    return res.json(parcels);
  }

  // update para retirada de encomenda
  async update(req, res) {
    const { deliveryman_id, id } = req.params;
    const { date } = req.query;

    // Verificar se a data está dentro do horário permitido para retirada
    const startDay = setSeconds(setMinutes(setHours(Number(date), 8), 0), 0);
    const endDay = setSeconds(setMinutes(setHours(Number(date), 18), 0), 0);

    if (
      !isWithinInterval(Number(date), {
        start: startDay,
        end: endDay,
      })
    ) {
      return res
        .status(400)
        .json({ error: 'Time not allowed for withdrawals' });
    }

    const { count } = await Parcel.findAndCountAll({
      where: {
        deliveryman_id,
        canceled_at: null,
        start_date: {
          [Op.ne]: null,
          [Op.between]: [startOfDay(Number(date)), endOfDay(Number(date))],
        },
      },
    });

    if (count >= 5) {
      return res.status(401).json({ error: 'Withdrawal limit exceeded' });
    }

    const parcel = await Parcel.findByPk(id);

    if (!parcel) return res.status(400).json({ error: 'Parcel not found' });

    if (parcel.deliveryman_id !== Number(deliveryman_id)) {
      return res.status(401).json({ error: 'You not can modify this parcel' });
    }

    if (parcel.start_date) {
      return res.status(400).json({ error: 'Delivery already initialized' });
    }

    parcel.start_date = new Date();

    await parcel.save();

    return res.json(parcel);
  }

  // Rota para entrega de encomenda
  async store(req, res) {
    const schema = Yup.object().shape({
      signature_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { deliveryman_id, id } = req.params;

    const parcel = await Parcel.findOne({
      where: {
        id,
        deliveryman_id,
        start_date: { [Op.ne]: null },
        end_date: null,
      },
    });

    if (!parcel) return res.status(400).json({ error: 'Parcel not found' });

    parcel.signature_id = req.body.signature_id;
    parcel.end_date = new Date();
    await parcel.save();

    return res.json(parcel);
  }
})();
