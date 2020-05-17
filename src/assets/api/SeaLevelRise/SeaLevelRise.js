/* eslint-disable */
import axios from 'axios';

class SeaLevelRise {
    async USA_Sea() {
        // min 이상 max 이하의 해수면 상승을 가진 미국의 바다만 출력 ex) min=4.1&&max=5 => 4.1 이상 5미만의 상승 바다만 출력
        try {
            const data = await axios.get(`https://sea-level-rise-data.herokuapp.com/api/v1/stations?min=2.5`);
            return data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }
}

export default new SeaLevelRise();