import axios from "axios";

class RecentC02 {
  async recent() {
    try {
      const { data } = await axios.get(" http://www.hqcasanova.com/co2/");
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(`this error handled ${error}`);
    }
  }
}

export default new RecentC02();
