import React from 'react';
import { Cart } from '../Cart';
import { Search } from '../Search';
import { HeaderWrapper } from './styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <Search />
      <Cart />
    </HeaderWrapper>
  );
};

export { Header };
