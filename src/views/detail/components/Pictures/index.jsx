import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { PicturesWrapper } from './style';

const Pictures = memo((props) => {
  const { pictureUrls } = props;
  return (
    <PicturesWrapper>
      <div className="top">
        <div className="left">
          <div className="item">
            <img src={pictureUrls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {
            pictureUrls?.slice(1, 5).map(item => {
              return (
                <div key={item} className="item">
                  <img src={item} alt=""/>
                  <div className="cover"></div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="see_pictures">查看照片</div>
    </PicturesWrapper>
  );
});
Pictures.propTypes = {
  pictureUrls: PropTypes.array
};

export default Pictures;
