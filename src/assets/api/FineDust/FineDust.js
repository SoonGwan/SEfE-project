import axios from 'axios';

class FineDust {
    // 실시간 미세먼지 api, XML 형식
    // 현재 대구의 100개 동네쪽 설정.
    // 토큰 만료될수도 있음
    async getDust() {
        try {
            const { data } = await axios.get('http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=7%2BUsf7fJEM6AMCjj6TpfRErxdoRIKdHGdyoZY4qUPl1jR4v9VgWaFoYo9OIToPnFxDpdQxw1rPry3fuuATgE2g%3D%3D&numOfRows=100&pageNo=1&sidoName=%EB%8C%80%EA%B5%AC&ver=1.3');
            return data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }
}

export default new FineDust();