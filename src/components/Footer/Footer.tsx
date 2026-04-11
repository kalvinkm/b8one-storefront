import { FooterPayments } from '../FooterPayments/FooterPayments';
import { PaymentData } from '../../data/PaymentData';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__column">
            <h4 className="footer__title">Atendimento</h4>
            <ul>
              <li>Central de Ajuda</li>
              <li>Fale Conosco</li>
              <li>WhatsApp</li>
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__title">Políticas</h4>
            <ul>
              <li>Política de Privacidade</li>
              <li>Termos de Uso</li>
              <li>Trocas e Devoluções</li>
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__title">Institucional</h4>
            <ul>
              <li>Sobre nós</li>
              <li>Trabalhe conosco</li>
              <li>Nossas lojas</li>
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__title">Dúvidas</h4>
            <ul>
              <li>Como comprar</li>
              <li>Entrega</li>
              <li>Sustentabilidade</li>
            </ul>
          </div>
        </div>

        <div className="footer__column">
          <h4 className="footer__title">Formas de pagamento</h4>
          <FooterPayments methods={PaymentData} />
        </div>

        <div className="footer__bottom">
          <p>© 2026 kalvinkm — Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
