/* eslint-disable */

import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';
import CO2RecentRepository from 'assets/api/C02recent/C02Recent';

@autobind
class CO2RecentStore {
    @observable recentCO2 = '';

    @action
    handleRecentCO2 = async () => {
        try {
            const response = await CO2RecentRepository.recent();
            console.log(response);
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

export default CO2RecentStore;