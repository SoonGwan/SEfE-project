import axios from 'axios';

class SeaLevelRise {
    async USA_Sea(min, max) {
        try {
            const { data } = await axios.get(`https://sea-level-rise-data.herokuapp.com/api/v1/stations?min=${min}&&max=${max}`);
            return data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }
}

export default new SeaLevelRise();