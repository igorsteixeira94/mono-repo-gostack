import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class SessionDeliverymanController {
  async store(req, res) {
    const deliveryman = await Deliveryman.findByPk(req.body.id, {
      attributes: { exclude: ['avatar_id'] },
      include: { model: File, as: 'avatar' },
    });

    if (!deliveryman)
      return res.status(400).json({ error: 'Entregador não existe' });

    return res.json(deliveryman);
  }
}

export default new SessionDeliverymanController();
