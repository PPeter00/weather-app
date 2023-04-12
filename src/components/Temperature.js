import React from 'react'
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from '@iconscout/react-unicons'
import { formatToLocalTime, iconUrlFromCode } from '../services/weather'

function Temperature({weather: {
    details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone, WeatherTypes
}
}) {
    
  return (
    <div>
      <div className='flex items-center justify-center flex-wrap py-6 text-xl text-cyan-200'>
        <p>{details}</p>
      </div>
      <div className='card-title flex flex-row flex-wrap items-center justify-center text-white py-3'>
        <img src={iconUrlFromCode(icon)} alt='' className='w-20'/>
        <p className='text-5xl'>{`${temp.toFixed()}°`}</p>
        
      </div>
      <br/>

      <div className='flex items-center justify-center flex-wrap py-6 text-xl text-white'>
      <div className='flex flex-col space-y-2'>

<div className='flex font-light text-md items-center justify-center'>
    <UilTemperature size={18} className='mr-1'/>
    Real Feel:
    <span className='font-medium ml-1'>{`${feels_like.toFixed()}°`}</span>
</div>

<div className='flex font-light text-md items-center justify-center'>
    <UilTear size={18} className='mr-1'/>
    Humidity:
    <span className='font-medium ml-1'>{`${humidity.toFixed()}%`}</span>
</div>

<div className='flex font-light text-md items-center justify-center'>
    <UilWind size={18} className='mr-1'/>
    Wind:
    <span className='font-medium ml-1'>{`${speed.toFixed()} km/h`}</span>
</div>

</div>
      </div>
      <hr/>
      <div className='flex flex-row flex-wrap item-center justify-center space-x-2 text-white text-sm py-5'>
        <UilSunset />
        <p className='font-light'>Rise: <span className='font-medium ml-1'>{formatToLocalTime(sunrise, timezone, 'hh:mm a')}</span> | </p>

        <UilSun />
        <p className='font-light'>Set: <span className='font-medium ml-1'>{formatToLocalTime(sunset, timezone, 'hh:mm a')}</span> | </p>

        <UilSun />
        <p className='font-light'>High: <span className='font-medium ml-1'>{`${temp_max.toFixed()}`}</span> | </p>

        <UilSun />
        <p className='font-light'>Low: <span className='font-medium ml-1'>{`${temp_min.toFixed()}`}</span> | </p>

      </div>
    </div>
  )
}

export default Temperature
