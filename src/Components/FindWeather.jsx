import React, { useEffect, useState } from 'react'
import Main from './Main';

export default function FindWeather({ information }) {
    const [weather, setWeather] = useState();
    useEffect(() => {
        if (information != 'empty') {
            console.log('------------------');
            console.log(information.lat);
            console.log(information.lon);

            let key = '8e3dc2c6cc1b12ca95cf78ecf195b0fc';
            const axios = require('axios').default;
            axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + `${information.lat}` + '&lon=' + `${information.lon}` + '&appid=' + `${key}`)
                .then(function (response) {
                    // handle success
                    console.log(response.data.weather[0].main);
                    setWeather(response.data.weather[0]);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
            console.log('------------------');

        }
    },[information.lat])



    return (
        // <div>{weather?.weather[0]?.main}</div>
        <Main information={information} weather={weather}/>
    )
}
