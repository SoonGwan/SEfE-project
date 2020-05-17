import React from 'react';
import MainTemplate from 'components/common/Template/MainTemplate';
import NaverNewsContainer from 'container/NaverNews/NaverNewsContainer';
import NaverBlogContainer from 'container/NaverBlog';
import Graph from 'components/Graph/Graph';
import MainContainer from 'container/Main';

const MainPage = () => {
  return (
    <MainTemplate>
      <MainContainer />
      <NaverNewsContainer />
      <Graph />
      <NaverBlogContainer />
    </MainTemplate>
  );
};

export default MainPage;
