/* eslint-disable */
import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';
import SeaLevelRise from 'assets/api/SeaLevelRise';

@autobind
class SeaLevelRiseStore {
    @observable seaLength = null;

    @action
    handleSeaLevel = async () => {
        try {
            const response = await SeaLevelRise.USA_Sea();
            console.log(response);
            this.seaLength = response.data.length;
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

export default SeaLevelRiseStore;