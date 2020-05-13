import React from 'react';
import './Graph.scss';

const Graph = () => {
  return (
    <>
      <div className="Graph">
        <div className="Graph-title">지구는 이렇게 되고 있습니다 그래프.</div>
        <div className="Graph-subTitle">English Title Here</div>
        <div className="Graph-wrap">
          <div className="Graph-wrap-box">Graph-Box</div>
          <div className="Graph-wrap-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur .Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </>
  );
};

export default Graph;
