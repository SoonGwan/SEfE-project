import axios from "axios";

class Weather {
  async recent(location) {
    //location 지역 받을꺼임
    // 1일 요청수가 제한되어있음
    try {
      const { data } = await axios.get(
        `api.openweathermap.org/data/2.5/weather?q=${location}&appid=c8dd7358613373841407a5221ddc865b&units=metric`
      );
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(`this error handled ${error}`);
    }
  }
}

export default new Weather();
