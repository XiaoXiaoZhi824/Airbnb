import React, { memo } from 'react';
import { CenterWrapper } from './style';
import SearchBarSVG from '@/assets/svg/SearchBarSVG';

const Header = memo(() => {
  return (
    <CenterWrapper>
      <div className="search_bar">
        <div className="text">
          搜索房源和体验
        </div>
        <div className="icon">
          <SearchBarSVG />
        </div>
      </div>
    </CenterWrapper>
  );
});

export default Header;
