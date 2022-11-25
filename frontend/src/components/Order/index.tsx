import { orders } from '../../mocks/orders';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

export function Order() {
  return (
    <Container>
      <OrdersBoard
        icon='🕒️'
        title='Fila de espera'
        orders={orders}
      />
      <OrdersBoard
        icon='🧑‍🍳'
        title='Em produção'
        orders={[]}
      />
      <OrdersBoard
        icon='✅'
        title='Pronto!'
        orders={[]}
      />
    </Container>
  );
}
