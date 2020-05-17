/* eslint-disable */
import NaverNewsStore from 'stores/NaverNews/NaverNewsStore';
import NaverBlogStore from 'stores/NaverBlog';
import CO2Store from 'stores/CO2Recent';
import AirQualityStore from 'stores/AirQuality';
import SeaLevelRiseStore from 'stores/SeaLevelRise';

const stores = {
  NewsSearch: new NaverNewsStore(),
  BlogSearch: new NaverBlogStore(),
  CO2Store: new CO2Store(),
  AirQualityStore: new AirQualityStore(),
  SeaLevelRiseStore: new SeaLevelRiseStore(),
};

export default stores;
