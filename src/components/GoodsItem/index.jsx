import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { GoodsItemWrapper } from './style';
import { Rate } from 'antd';

const GoodsItem = memo((props) => {
  const { goodsData, itemWidth = '25%' } = props;
  return (
    <GoodsItemWrapper verifyColor={goodsData?.verify_info?.text_color || '#39576a'} itemWidth={itemWidth}>
      <div className="inner">
        <div className="cover">
          <img src={goodsData.picture_url} alt="" />
        </div>
        <div className="desc">{ goodsData.verify_info.messages.join(' · ') }</div>
        <div className="name">{ goodsData.name }</div>
        <div className="price">¥{ goodsData.price }/晚</div>
        <div className="bottom">
          <Rate 
            value={goodsData.star_rating ?? 5}
            allowHalf
            disabled
            style={{fontSize: '12px', color: '#00848A'}}
          />
          <span className="count">{ goodsData.reviews_count }</span>
          {
            goodsData.bottom_info && <span className="extra">·{ goodsData.bottom_info?.content }</span>
          }
        </div>
      </div>
    </GoodsItemWrapper>
  );
});
GoodsItem.propTypes = {
  goodsData: PropTypes.object,
  itemWidth: PropTypes.string
};

export default GoodsItem;
