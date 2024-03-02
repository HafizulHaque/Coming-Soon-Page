'use client'

import localFont from 'next/font/local'
import { useEffect, useState } from 'react'
import moment from 'moment-timezone'
 
// Font files can be colocated inside of `pages`
const myFont = localFont({ src: '../../../public/fonts/digital-7.ttf' })

const CountDown = ({estimatedDate = '2024-01-24'}) => {

  const [timeDiff, setTimeDiff] = useState(null)

  useEffect(() => {
    // console.log(estDate)
    let timer;
    if(typeof window !== 'undefined'){
      if(timeDiff === null){
        const timeZone = 'GMT+6';
        let estTime = moment(estimatedDate).tz(timeZone)
        let currentTime = moment().tz(timeZone)
        setTimeDiff(Math.max(Math.floor((estTime - currentTime)/1000), 0))
      } else if( timeDiff > 0){
        timer = setTimeout(() => {
          setTimeDiff(timeDiff - 1)
        }, 1000)
      }
    }
    return () => clearTimeout(timer)
  }, [timeDiff])

  const formatTime = (divider, remainder) => {
    const time = Math.floor((timeDiff/divider))%remainder
    return time < 10 ? '0'+time : time
  }
  

  return (
    <div className={`${myFont.className} flex justify-center gap-8 mb-12`}>

      <div className='flex flex-col items-center'>
        <span className='text-8xl p-2 bg-gradient-to-b from-white/30 via-white/20 to-white/5 rounded-md'>
          {formatTime(86400, 1)}
        </span>
        <span className='text-xl tracking-widest'>Days</span>
      </div>

      <div className='flex flex-col items-center'>
        <span className='text-8xl p-2 bg-gradient-to-b from-white/30 via-white/20 to-white/5 rounded-md'>
          {formatTime(3600, 60)}
        </span>
        <span className='text-xl tracking-widest'>Hours</span>
      </div>

      <div className='flex flex-col items-center'>
        <span className='text-8xl p-2 bg-gradient-to-b from-white/30 via-white/20 to-white/5 rounded-md'>
          {formatTime(60, 60)}
        </span>
        <span className='text-xl tracking-widest'>Minutes</span>
      </div>

      <div className='flex flex-col items-center'>
        <span className='text-8xl p-2 bg-gradient-to-b from-white/30 via-white/20 to-white/5 rounded-md'>
          {formatTime(1, 60)}
        </span>
        <span className='text-xl tracking-widest'>Seconds</span>
      </div>

    </div>
  )
}

export default CountDown
