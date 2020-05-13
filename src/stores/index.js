/* eslint-disable */

/*
예시: import Login from './Login';

const stores = {
  Login: new Login()
};
*/
import NaverNewsStore from 'stores/NaverNews/NaverNewsStore';
import NaverBlogStore from 'stores/NaverBlog';

const stores = {
  NewsSearch: new NaverNewsStore(),
  BlogSearch: new NaverBlogStore()
};

export default stores;
