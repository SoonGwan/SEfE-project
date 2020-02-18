import axios from "axios";

class Weather {
  async recent(location) {
    //location 지역 받을꺼임 온도는 화씨로 들어와서 온도 -273 하는 값 가져서 하면됨
    // 1일 요청수가 제한되어있음
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
