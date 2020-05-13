import React from 'react';
import Main from 'components/Main';
import MainTemplate from 'components/common/Template/MainTemplate';
import NaverNewsContainer from 'container/NaverNews/NaverNewsContainer';
import NaverBlogContainer from 'container/NaverBlog';
import Graph from 'components/Graph/Graph';

const MainPage = () => {
  return (
    <MainTemplate>
      <Main />
      <NaverNewsContainer />
      <Graph />
      <NaverBlogContainer />
    </MainTemplate>
  );
};

export default MainPage;
