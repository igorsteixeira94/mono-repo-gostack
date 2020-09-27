import axios from 'axios';

const api = axios.create({ baseURL: 'http://10.0.2.2:3333' });

export default api;

// -> 10.0.2.2 = Usando native no emulador
// -> 10.0.3.2 = Usando native no genymo
// -> ip do seu pc = Pra qualquer outra alternativa
