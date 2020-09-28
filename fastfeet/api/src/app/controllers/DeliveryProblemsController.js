import * as Yup from 'yup';
import DeliveryProblems from '../models/DeliveryProblems';
import Parcel from '../models/Parcel';

export default new (class DeliveryProblemsController {
  // Lista todas as encomendas com problemas
  async index(req, res) {
    const { page = 1 } = req.query;
    const problemas = await DeliveryProblems.findAll({
      order: [['created_at', 'DESC']],
      limit: 5,
      offset: (page - 1) * 5,
      include: { model: Parcel, as: 'parcel', where: { canceled_at: null } },
    });
    return res.json(problemas);
  }

  // Lista todos os problema de uma encomenda
  async show(req, res) {
    const { page = 1 } = req.query;
    const { id } = req.params;

    const parcel = await Parcel.findByPk(id, { attributes: ['id', 'product'] });

    if (!parcel) {
      return res.status(400).json({ error: 'Parcel not found' });
    }

    const problems = await DeliveryProblems.findAll({
      limit: 10,
      offset: (page - 1) * 10,
      where: { delivery_id: parcel.id },
    });

    return res.json({ problems, parcel });
  }

  // Cadastrar problema em uma entrega
  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const parcel = await Parcel.findByPk(req.params.id);

    if (!parcel) {
      return res.status(400).json({ error: 'Parcel not found' });
    }
    const delivery_problem = await DeliveryProblems.create({
      description: req.body.description,
      delivery_id: parcel.id,
    });

    return res.json(delivery_problem);
  }

  // Cancelar uma encomenda por causa do problema
  async delete(req, res) {
    const problemExist = await DeliveryProblems.findByPk(req.params.id);

    if (!problemExist) {
      return res.status(400).json({ error: 'No problems found' });
    }
    const { delivery_id } = problemExist;

    const deleteParcel = await Parcel.findByPk(delivery_id);

    deleteParcel.canceled_at = new Date();

    await deleteParcel.save();

    return res.json(deleteParcel);
  }
})();
