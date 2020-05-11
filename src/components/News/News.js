/* eslint-disable react/prop-types */
import React from 'react';
import './News.scss';
import moment from 'moment';
import { FaAngleRight } from 'react-icons/fa';

const News = ({ newsList, imgLoading }) => {
  console.log(newsList);
  const newsListTemplate = newsList.map((data) => {
    const { description, link, originallink, pubDate, title } = data;
    return (
      <>
        <div className="News-left-newsBox">
          <div className="News-left-newsBox-img"></div>
          <div className="News-left-newsBox-side">
            <div className="News-left-newsBox-title">
              {title.replace(
                /<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi,
                ''
              )}
            </div>
            <div className="News-left-newsBox-date">
              {moment.parseZone(pubDate).format('YYYY-MM-DD HH:SS')}
            </div>
            <div className="News-left-newsBox-subtitle">
              {description.replace(
                /<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi,
                ''
              )}
            </div>
            <div className="News-left-newsBox-more">
              <a href={link}>
                More
                <FaAngleRight
                  style={{ verticalAlign: 'bottom', fontSize: '20px' }}
                />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="News">
        <div className="News-left">
          {imgLoading === true ? (
            <>
              <div>로딩컴포넌트 넣을거 생각좀</div>
            </>
          ) : (
            <>{newsListTemplate}</>
          )}
        </div>
        <div className="News-M">
          <div className="News-M-right">
            <div className="News-M-right-Box">
              <div className="News-M-right-Box-img"></div>
              <div className="News-M-right-Box-title">
                여기에 무슨 문구가 들어가면 잘 들어갔다고 소문이 날까요?
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
