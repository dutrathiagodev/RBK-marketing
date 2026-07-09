import { useState } from 'react';
import { Send } from 'lucide-react';

const serviceOptions = [
  'Gestão de redes sociais',
  'Gestão de tráfego pago',
  'Construção de site',
  'Automação de IA',
  'Consultoria de marketing',
  'Eventos e palestras',
  'Treinamentos',
];

export default function ContactForm() {
  const [isSent, setIsSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSent(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Nome completo
        <input type="text" name="name" placeholder="Seu nome" required />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="seu@email.com" required />
      </label>
      <label>
        Telefone
        <input type="tel" name="phone" placeholder="(11) 98765-4321" required />
      </label>
      <label>
        Serviço de interesse
        <select name="service" defaultValue="" required>
          <option value="" disabled>
            Selecione um serviço
          </option>
          {serviceOptions.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label>
        Mensagem
        <textarea name="message" rows="6" placeholder="Conte-nos sobre seu projeto..." required />
      </label>
      <button className="button button--primary button--full" type="submit">
        <Send size={18} strokeWidth={1.9} aria-hidden="true" />
        Enviar mensagem
      </button>
      {isSent ? (
        <p className="form-success" role="status">
          Mensagem registrada. A equipe RBK analisará sua operação e retornará em até 24h úteis.
        </p>
      ) : null}
    </form>
  );
}
