import axios from "axios";

class Weather {
  async recent(location) {
    //location 지역 받을꺼임
    // 1일 요청수가 제한되어있음
    // 2월 22일 api 키 변경 되어야 할 수 있음 / 기상청 api를 사용한것도 고려
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
