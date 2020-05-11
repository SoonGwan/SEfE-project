import React, { useCallback, useState } from 'react';
import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';
import News from 'components/News/News';

const NaverNewsContainer = ({ store }) => {
  const { handleSearchNews, newsList } = store.NewsSearch;
  const [imgLoading, setImgLoading] = useState(false);
  // const { newsList, setNewsList } = useState([]);

  const requestSearchNews = useCallback(async () => {
    setImgLoading(true);
    await handleSearchNews()
      .then((response) => {
        setImgLoading(false);
        // setNewsList(response.data.items);
        console.log(newsList);
      })
      .catch((error) => {
        setImgLoading(false);
        return error;
      });
  });

  useEffect(() => {
    requestSearchNews();
  }, []);

  return (
    <>
      <News newsList={newsList} imgLoading={imgLoading} />
    </>
  );
};

export default inject('store')(observer(NaverNewsContainer));
