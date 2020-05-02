/* eslint-disable */
import axios from 'axios';

class WorldAirQuality {
  async AirQuality(local) {
    // local 부분에 지역명 써서 받아오기 예) seoul, daegu, gwangju, busan 등등
    try {
      const { data } = await axios.get(`https://api.waqi.info/feed/${local}/?token=8c5541d65e7b4ba891b35b3f06e2f884a688abdb`);
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new WorldAirQuality();