import React from 'react';
import './Main.scss';
import tree from 'assets/img/tree.png';
import NaverNewsContainer from 'container/NaverNews/NaverNewsContainer';

const Main = () => {
  return (
    <>
      <div className="Main">
        <img src={tree} className="Main-Background" alt="test" />
        <div className="Main-ContentsBox">
          <div className="Main-ContentsBox-Contents">
            <h1 className="Main-ContentsBox-Contents-Title">지구는 지금, </h1>
            <br />

            <div className="Main-ContentsBox-Contents-Item">
              당신의 손길을 필요로 합니다.
            </div>
            <div className="Main-ContentsBox-Contents-Item">
              죽어가는 지구를 함께 도와주세요.
            </div>
          </div>
        </div>

        <ul className="Main-LinkBox">
          <li>Link1</li>
          <li>Link2</li>
          <li>Link3</li>
          <li>Link4</li>
          <li>Link5</li>
          <li>Link6</li>
        </ul>
      </div>
      <NaverNewsContainer />
    </>
  );
};

export default Main;
