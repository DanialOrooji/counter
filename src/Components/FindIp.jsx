import React, { useEffect, useState } from 'react'
import FindLoacation from './FindLocation'
export default function FindIp() {
    const [ip, setIp] = useState(0);
    useEffect(() => {
        const axios = require('axios').default;
        axios.get('https://api.ipify.org?format=json')
            .then(function (response) {
                // handle success
                setIp(response.data.ip);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    },[ip])

    return (
        <FindLoacation ip={ip} />
    )
}
