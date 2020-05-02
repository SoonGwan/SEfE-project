/* eslint-disable */
import axios from "axios";

class Arctic_Sea_Ice_Minimum {
  async Minimum() {
    try {
      const { data } = await axios.get(
        "https://climate.nasa.gov/system/internal_resources/details/original/1929_Arctic_data_1979-2019.txt"
      );
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(`this error handled ${error}`);
    }
  }
}

export default new Arctic_Sea_Ice_Minimum();
