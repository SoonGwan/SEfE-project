import React from 'react';
import Main from 'components/Main';
import MainTemplate from 'components/common/Template/MainTemplate';
import NaverNewsContainer from 'container/NaverNews/NaverNewsContainer';

const MainPage = () => {
  return (
    <MainTemplate>
      <Main />
      <NaverNewsContainer />
    </MainTemplate>
  );
};

export default MainPage;
