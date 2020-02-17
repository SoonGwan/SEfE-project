import axios from 'axios';

class SeaLevelRise {
    async USA_Sea(min, max) {
        // min 이상 max 이하의 해수면 상승을 가진 바다만 출력
        try {
            const { data } = await axios.get(`https://sea-level-rise-data.herokuapp.com/api/v1/stations?min=${min}&&max=${max}`);
            return data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }
}

export default new SeaLevelRise();