import React from 'react';
import './Main.scss';
import PropTypes from 'prop-types';
import tree from 'assets/img/tree.png';
import Dust from 'assets/img/Dust.png';
import co2 from 'assets/img/co2.png';
import SeaLevel from 'assets/img/SeaLevel.png';

const Main = ({ airQuality, seaLength }) => {
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

        <div className ="Main-LinkBox">
          <ul className="Main-LinkBox-Item">
            <div className ="Main-LinkBox-Item-Dust">
              <img src ={Dust} alt ="dust" />
              <div>미세먼지 농도</div>
              <span style ={{ color: 'green' }}>{airQuality}ppm</span>
            </div>

            <div className ="Main-LinkBox-Item-Dust">
              <img src ={Dust} alt ="dust" />
              <div>미세먼지 농도</div>
              <span style ={{ color: 'green' }}>{airQuality}ppm</span>
            </div>

            <div className ="Main-LinkBox-Item-Dust">
              <img src ={Dust} alt ="dust" />
              <div>미세먼지 농도</div>
              <span style ={{ color: 'green' }}>{airQuality}ppm</span>
            </div>

            <div className ="Main-LinkBox-Item-Dust">
              <img src ={SeaLevel} alt ="dust" />
              <div>미국 2.5m이상 해수면</div>
              <span style ={{ color: 'green' }}>{seaLength}개</span>
            </div>

            <div className ="Main-LinkBox-Item-Dust">
              <img src ={Dust} alt ="dust" />
              <div>미세먼지 농도</div>
              <span style ={{ color: 'green' }}>{airQuality}ppm</span>
            </div>

            <div className ="Main-LinkBox-Item-Dust">
              <img src ={co2} alt ="dust" />
              <div>이산화탄소 농도</div>
              <span style ={{ color: 'yellow' }}>414.89ppm</span>
            </div>
          </ul>
          <div className ="Main-LinkBox-Danger">
            <li style ={{ color: 'green' }}>100미만: 안전</li>
            <li style ={{ color: 'yellow' }}>300이상: 위기</li>
            <li style ={{ color: 'red' }}>500이상: 멸망</li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

Main.propTypes = {
  airQuality: PropTypes.any.isRequired,
  seaLength: PropTypes.number.isRequired
};