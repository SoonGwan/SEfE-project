/* eslint-disable */
import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';
import WorldAirQuality from 'assets/api/WorldAirQuality';

@autobind
class AirQualityStore {
    @observable airQuality = 0;

    @action
    handleAirQuality = async (query) => {
        try {
            const response = await WorldAirQuality.AirQuality(query);
            this.airQuality = response.data.aqi;
            return new Promise((resolve, reject) => {
                resolve(response);
            })
        } catch (error) {
            return new Promise((resolve, reject) => {
                reject(error);
            })
        }
    }
}

export default AirQualityStore;