import React, { memo } from 'react';
import { HeaderWrapper } from './style';
import Left from './components/left';
import Center from './components/center';
import Right from './components/right';

const Header = memo(() => {
  return (
    <HeaderWrapper>
      <Left />
      <Center />
      <Right />
    </HeaderWrapper>
  );
});

export default Header;
