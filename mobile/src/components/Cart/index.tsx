import { FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../types/CartItem';
import { formatCurrency } from '../../utils/formatCurrency';
import { MinusCircle } from '../Icons/MinusCircle';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';
import {
  Actions,
  Image,
  Item,
  ProductContainer,
  ProductDetails,
  QuantityContainer } from './styles';

interface CartProps {
  cartItem: CartItem[];
}

export function Cart({ cartItem }: CartProps) {
  return (
    <FlatList
      data={cartItem}
      keyExtractor={(cartItem => cartItem.product._id)}
      showsVerticalScrollIndicator={false}
      renderItem={({ item: cartItem }) => (
        <Item>
          <ProductContainer>
            <Image
              source={{
                uri: `http://10.10.10.10:3333/uploads/${cartItem.product.imagePath}`
              }}
            />

            <QuantityContainer>
              <Text size={14} color="#666">
                {cartItem.quantity}x
              </Text>
            </QuantityContainer>

            <ProductDetails>
              <Text size={14} weight="600" >{cartItem.product.name}</Text>
              <Text size={14} color="#666" style={{ marginTop: 4 }}>{formatCurrency(cartItem.product.price)}</Text>
            </ProductDetails>

          </ProductContainer>

          <Actions>
            <TouchableOpacity style={{ marginRight: 24 }}>
              <PlusCircle />
            </TouchableOpacity>

            <TouchableOpacity>
              <MinusCircle />
            </TouchableOpacity>
          </Actions>
        </Item>
      )}
    />
  );
}
