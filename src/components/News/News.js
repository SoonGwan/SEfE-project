import React from 'react';
import './News.scss';
const News = () => {
  return (
    <>
      <div className="News">
        <div className="News-left">
          <div className="News-left-newsBox">
            <div className="News-left-newsBox-img"></div>
            <div className="News-left-newsBox-side">
              <div className="News-left-newsBox-title">
                이곳은 뉴스 타이틀이 들어가는 곳입니다.
              </div>
              <div className="News-left-newsBox-subtitle">
                컬러는 gray2 입니다. 뉴스 내용이 조금 보여지는 곳 입니다 . 다른
                컨텐츠로 내용 변경 및 수정시 도움이 필요한 경우 아니면 따로 상의
                없이 수정해도 됩니다.컬러는 gray2 입니다. 뉴스 내용이 조금
                보여지는 곳 입니다 . 다른 컨텐츠로 내용 변경 및 수정시 도움이
                필요한 경우 아니면 따로 상의 없이 수정해도 됩니다.
              </div>
              <div className="News-left-newsBox-more">More--</div>
            </div>
          </div>
        </div>
        <div className="News-right"></div>
      </div>
    </>
  );
};

export default News;
