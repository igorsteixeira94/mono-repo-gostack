import Mail from '../../lib/Mail';

class CreateParcelMail {
  get key() {
    return 'CreateParcelMail';
  }

  async handle({ data }) {
    const { parcel } = data;
    await Mail.sendMail({
      to: `${parcel.deliveryman.name} <${parcel.deliveryman.email}>`,
      subject: 'Nova entrega',
      template: 'create',
      context: {
        deliveryman: parcel.deliveryman.name,
        recipient: parcel.recipient.name,
        product: parcel.product,
        adress: `Rua: ${parcel.recipient.street}, nº ${parcel.recipient.number}. Cidade: ${parcel.recipient.city}. CEP:${parcel.recipient.cep}`,
      },
    });
  }
}

export default new CreateParcelMail();
