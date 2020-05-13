/* eslint-disable */
import axios from 'axios';
import { SERVER } from 'config/config.json';

class NaverBlogRepository {
  handleSearchBlog = async () => {
    try {
      const { data } = await axios.get(`${SERVER}/blog?query=환경&sort=sim&display=4`);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new NaverBlogRepository();
