/* eslint-disable */
import axios from "axios";

class RecentC02 {
  async recent() {
    try {
      const data = await axios.get("http://www.hqcasanova.com/co2/");
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new RecentC02();
