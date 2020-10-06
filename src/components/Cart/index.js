import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartWrapper } from './styles';
import CartContext from 'context/CartContext';

export const Cart = () => {
  const { checkout } = useContext(CartContext);
  let totalQuantity = 0;
  if (checkout) {
    checkout.lineItems.forEach(lineItem => {
      totalQuantity = totalQuantity + lineItem.quantity;
    });
  }
  return (
    <CartWrapper>
      <FaShoppingCart size="1.5rem" />
      <div>
        ${totalQuantity} item(s) / {checkout?.totalPrice || '0.00'}
      </div>
    </CartWrapper>
  );
};
