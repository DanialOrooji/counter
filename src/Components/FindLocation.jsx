import React, { useEffect, useState } from 'react'
import FindWeather from './FindWeather'

export default function FindLocation({ ip }) {
    const [information, setIformation] = useState('empty');
    useEffect(() => {
        const axios = require('axios').default;
        axios.get('http://ip-api.com/json/' + `${ip}`)
            .then(function (response) {
                // handle success
                setIformation(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    },[ip])

return (
    <FindWeather information={information} />
)
}
