import React from 'react';
import './NotFound.scss';
import Man10 from 'assets/img/Man10.svg';
import Woman3 from 'assets/img/Woman3.svg';
import Man1 from 'assets/img/Man1.svg';

const NotFound = () => {
  return (
    <>
      <div className="NotFound">
        <div className="NotFound-wrap">
          <div className="NotFound-wrap-text">
            {/* 어라? 길을 잘못 들어선것 같아요! */}
            어라? 여기는 막다른 길이에요!
          </div>
          <div className="NotFound-wrap-notFound">
            Page not Found <b>__:D</b> <br /> <b>404</b>
          </div>
          <img className="NotFound-wrap-img" src={Man1} alt={Man1} />
        </div>
      </div>
    </>
  );
};

export default NotFound;
