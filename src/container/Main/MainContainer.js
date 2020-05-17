/* eslint-disable */
import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import Main from 'components/Main';

const MainContainer = ({ store }) => {
    const { recentCO2, handleRecentCO2 } = store.CO2Store;
    const { handleAirQuality, airQuality } = store.AirQualityStore;
    const { handleSeaLevel, seaLength } = store.SeaLevelRiseStore;

    useEffect(() => {
        handleRecentCO2();
        handleAirQuality("seoul");
        handleSeaLevel();
    }, []);

    return (
        <Main airQuality ={airQuality} seaLength ={seaLength} />
    );
}

export default inject('store')(observer(MainContainer));