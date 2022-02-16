import { Container } from "./styles";
import imcomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';


export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={imcomeImg} alt="imcome" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="imcome" />
        </header>
        <strong>- R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="imcome" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
    </Container>
  );
}