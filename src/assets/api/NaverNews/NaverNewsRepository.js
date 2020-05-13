/* eslint-disable */
import axios from 'axios';
import { SERVER } from 'config/config.json';

class NaverNewsRepository {
  handleSearchNews = async () => {
    try {
      const { data } = await axios.get(
        `${SERVER}/news?query=환경&sort=sim&display=4`
      );
      // ↓↓↓↓↓ Query Parameters
      // query: 검색어
      // sort=sim : 정확도순, sort=date : 날짜순
      // display: 검색결과 최대 출력수 (기본값 10)
      // start: 검색 시작위치 (최대 1000)
      return data;
    } catch (error) {
      throw error;
    }
  };

  handleSearchBlog = async () => {
    try {
      const { data } = await axios.get(`${SERVER}/blog?query=환경&sort=sim&display=4`);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new NaverNewsRepository();
