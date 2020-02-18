import axios from "axios";

class Weather {
  async recent(location) {
    try {
      const { data } = await axios.get(
        `api.openweathermap.org/data/2.5/weather?q=${location}&appid=c8dd7358613373841407a5221ddc865b`
      );
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(`this error handled ${error}`);
    }
  }
}

export default new Weather();
