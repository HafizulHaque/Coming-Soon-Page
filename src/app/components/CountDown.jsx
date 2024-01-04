'use client'

import localFont from 'next/font/local'
import { useEffect, useState } from 'react'
import style from './CountDown.module.css'
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
    <div className={`${style.container} ${myFont.className}`}>
      <div className={style.item}><span>{formatTime(86400, 1)}</span><span>Days</span></div>
      <div className={style.item}><span>{formatTime(3600, 60)}</span><span>Hours</span></div>
      <div className={style.item}><span>{formatTime(60, 60)}</span><span>Minutes</span></div>
      <div className={style.item}><span>{formatTime(1, 60)}</span><span>Seconds</span></div>
    </div>
  )
}

export default CountDown
