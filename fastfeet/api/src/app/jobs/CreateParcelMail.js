import Mail from '../../lib/Mail';

class CreateParcelMail {
  get key() {
    return 'CreateParcelMail';
  }

  async handle({ data }) {
    const { parcels } = data;
    await Mail.sendMail({
      to: `${parcels.deliveryman.name} <${parcels.deliveryman.email}>`,
      subject: 'Nova entrega',
      text: 'Você tem uma nova entrega',
    });
  }
}

export default new CreateParcelMail();
