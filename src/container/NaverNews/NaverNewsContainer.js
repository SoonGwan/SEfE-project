import React, { useCallback, useState } from 'react';
import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';
import News from 'components/News/News';

const NaverNewsContainer = ({ store }) => {
  const { handleSearchNews } = store.NewsSearch;
  const { imgLoading, setImgLoading } = useState(false);
  const { newsList, setNewsList } = useState([]);

  const requestSearchNews = useCallback(async () => {
    await handleSearchNews()
      .then((resposne) => {
        setImgLoading(false);
        console.log(resposne);
      })
      .catch((error) => {
        return error;
      });
  });

  useEffect(() => {
    requestSearchNews();
  });

  return (
    <>
      <News />
    </>
  );
};

export default inject('store')(observer(NaverNewsContainer));
