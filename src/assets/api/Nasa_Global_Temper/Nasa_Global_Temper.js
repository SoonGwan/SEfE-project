import axios from "axios";

class Nasa_Global_Temper {
  async Temper() {
    //이 시부레 이거 txt json 바꿀려면 파이선으로 하나 할 수 있다는데 보류
    try {
      const { data } = await axios.get(
        "https://data.giss.nasa.gov/gistemp/graphs/graph_data/Global_Mean_Estimates_based_on_Land_and_Ocean_Data/graph.txt"
      );
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(`this error handled ${error}`);
    }
  }
}

export default new Nasa_Global_Temper();
