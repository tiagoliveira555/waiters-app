import {
  Container,
  CategoryContainer,
  MenuContainer,
  Footer,
  FooterContainer } from './styles';

import { Header } from '../Header';
import { Categories } from '../Categories';
import { Menu } from '../Menu';
import { Button } from '../Button';
import { TableModal } from '../TableModal';
import { useState } from 'react';
import { Cart } from '../Cart';
import { products } from '../../mocks/products';
import { CartItem } from '../../types/CartItem';

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [cartItem, setCartItem] = useState<CartItem[]>([
    {
      product: products[0],
      quantity: 1
    },
    {
      product: products[1],
      quantity: 2
    }
  ]);


  function handleSaveTable(table: string) {
    setSelectedTable(table);
    setIsTableModalVisible(false);
  }

  function handleCancelOrder() {
    setSelectedTable('');
  }

  return (
    <>
      <Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleCancelOrder}
        />

        <CategoryContainer>
          <Categories></Categories>
        </CategoryContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>

      <Footer>
        <FooterContainer>
          {!selectedTable ? (
            <Button onPress={() => setIsTableModalVisible(true)}>
            Novo Pedido
            </Button>
          ) :
            (
              <Cart cartItem={cartItem} />
            )
          }

        </FooterContainer>
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>
  );
}
