/* eslint-disable */

/*
예시: import Login from './Login';

const stores = {
  Login: new Login()
};
*/
import NaverNewsStore from 'stores/NaverNews/NaverNewsStore';

const stores = {
  NewsSearch: new NaverNewsStore(),
};

export default stores;
