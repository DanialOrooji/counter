import React from 'react'
import ReactLoading from "react-loading";
export default function ({ information, weather }) {
    console.log(information);
    console.log('----------------');
    console.log(weather);
    return (
        <div className='h-full'>
            {weather == undefined
                ?
                <div className='flex items-center justify-center h-full bg-[#DADADA]'>
                    <ReactLoading type="spokes" color="#0000FF"
                        height={100} width={50} />
                    {weather?.Main}
                </div>
                :
                <div className='flex flex-col md:flex-row h-full' >
                    <div className='basis-1/3 md:basis-3/4 '>
                        <img src={`${weather?.main}.png`} className='h-full w-full' />
                    </div>
                    <div className='basis-2/3 md:basis-1/4  flex flex-col bg-[#e1e1e1]'>
                        <div className='bg-gray-300 basis-1/2 rounded-xl' style={{ backgroundImage: `url(e.jpg)` }}>
                            <div className='mx-6'>
                                <div className='text-center py-2 md:pb-5' >
                                    <p className='fonr-bold'>
                                        Country
                                    </p>
                                </div>
                                <div className='flex flex-row justify-between items-center md:py-5 py-3'>
                                    <p>
                                        {information?.country}
                                    </p>
                                    <img src={`https://countryflagsapi.com/png/${information?.countryCode}`} className='w-1/4 h-1/4' />
                                </div>
                                <div className='md:py-5 py-3 flex flex-row justify-between'>
                                    <p>City</p>
                                    <p>
                                        {information?.city}
                                    </p>
                                </div>
                                <div className='md:py-5 py-3  flex flex-row justify-between'>
                                    <p>
                                        Continent
                                    </p>
                                    <p>
                                        {information?.timezone}
                                    </p>
                                </div>
                                <div className='hidden md:flex flex-row justify-between md:py-5 py-3'>
                                    <p>
                                        Network
                                    </p>
                                    <p>
                                        {information?.org}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='basis-1/2 text-white'  >
                            <div className='mx-2 flex flex-col h-full'>
                                <div className='text-center py-2 md:pb-5 basis-1/5 '>
                                    <p className='fonr-bold text-black'>
                                        Weather
                                    </p>
                                </div>
                                <div style={{ backgroundImage: `url(w.png)` }} className='basis-3/5 flex flex-col items-center justify-center bg-no-repeat	rounded-xl'>
                                    <div className='flex flex-row justify-between items-center md:py-5 py-3 w-full px-2' >
                                        <p>
                                            {weather?.main}
                                        </p>
                                        <img src={`http://openweathermap.org/img/wn/${weather?.icon}.png`}  />
                                    </div>
                                    <div className='md:py-5 py-3 flex flex-row justify-between w-full px-2'>
                                        <p>Details</p>
                                        <p>
                                            {weather?.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
