import React, { memo } from 'react';
import { LeftWrapper } from './style';
import LogoSVG from 'assets/svg/LogoSVG'

const Header = memo(() => {
  return (
    <LeftWrapper>
      <div className="logo">
        <LogoSVG />
      </div>
    </LeftWrapper>
  );
});

export default Header;
