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

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');


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
              <Cart />
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
