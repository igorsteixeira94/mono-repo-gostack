import Deliveryman from '../models/Deliveryman';

class SessionDeliverymanController {
  async store(req, res) {
    const deliveryman = await Deliveryman.findByPk(req.body.id);

    if (!deliveryman)
      return res.status(400).json({ error: 'Entregador não existe' });

    return res.json(deliveryman);
  }
}

export default new SessionDeliverymanController();
