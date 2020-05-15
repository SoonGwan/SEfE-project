/* eslint-disable */
import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';
import NaverBlogRepository from 'assets/api/NaverBlog';

@autobind
class NaverBlogStore {
  @observable blogList = [];

  @action
  handleSearchBlog = async () => {
    try {
      const response = await NaverBlogRepository.handleSearchBlog();
      this.blogList = response.data.items;
      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  };
}

export default NaverBlogStore;
