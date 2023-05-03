import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { DetailWrapper } from './style';
import Pictures from './components/Pictures';

const Detail = memo(() => {
  const { goodsInfo } = useSelector(state => ({
    goodsInfo: state.detail.goodsInfo
  }), shallowEqual);
  return (
    <DetailWrapper>
      <Pictures pictureUrls={goodsInfo.picture_urls} />
    </DetailWrapper>
  );
});

export default Detail;
