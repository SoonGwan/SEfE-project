/* eslint-disable */
import axios from 'axios';
import { SERVER, clientId, clientSecret } from 'config/config.json';

class NaverNewsRepository {
  handleSearchNews = async () => {
    try {
      const { data } = await axios.get(`${SERVER}?query=naver`, {
        headers: {
          'X-Naver-Client-Id': clientId,
          'X-Naver-Client-Secret': clientSecret,
        },
      });
      return data;
    } catch (error) {
      throw error;
    }
  };
}

export default new NaverNewsRepository();
