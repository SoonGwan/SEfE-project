/* eslint-disable */
import axios from 'axios';
import { SERVER, clientId, clientSecret } from 'config/config.json';

class NaverNewsRepository {
    handleSearchNews = async (query) => {
        try {
            const { data } = await axios.get(`${SERVER}?query=${query}`, {
                headers: {
                    "X-Naver-Client-Id": clientId,
                    "X-Naver-Client-Secret": clientSecret
                }
            })
        } catch (error) {
            throw error;
        }
    }
}

export default new NaverNewsRepository();