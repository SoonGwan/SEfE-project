import axios from "axios";

class C02 {
  async co2process() {
    try {
      const { data } = await axios.get(
        " http://www.hqcasanova.com/co2?callback=process"
      );
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(`this error handled ${error}`);
    }
  }
}

export default new C02();
