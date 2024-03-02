'use client'

import localFont from 'next/font/local'
import Countdown, { zeroPad } from 'react-countdown'
 
// Font files can be colocated inside of `pages`
const myFont = localFont({ src: '../../../public/fonts/digital-7.ttf' })

import { deployDay, deployMonth, deployYear } from '../../../config'

const CountDown = () => {

  return (
    <Countdown 
      date={new Date(deployYear, deployMonth-1, deployDay)} 
      renderer={({ days, hours, minutes, seconds }) => {
        return (
          <div className={`${myFont.className} flex justify-center gap-6 md:gap-8 mb-12 h-full`}>
            <div className='flex flex-col items-center'>
              <span className='text-4xl md:text-8xl p-4 mb-1 md:mb-2 bg-gradient-to-b from-white/30 via-white/20 to-white/5 rounded-md'>
                {zeroPad(days)}
              </span>
              <span className='text-2xl md:text-4xl tracking-widest'>Day</span>
            </div>

            <div className='flex flex-col items-center'>
              <span className='text-4xl md:text-8xl p-4 mb-1 md:mb-2 bg-gradient-to-b from-white/30 via-white/20 to-white/5 rounded-md'>
                {zeroPad(hours)}
              </span>
              <span className='text-2xl md:text-4xl tracking-widest'>Hour</span>
            </div>

            <div className='flex flex-col items-center'>
              <span className='text-4xl md:text-8xl p-4 mb-1 md:mb-2 bg-gradient-to-b from-white/30 via-white/20 to-white/5 rounded-md'>
                {zeroPad(minutes)}
              </span>
              <span className='text-2xl md:text-4xl tracking-widest'>Min</span>
            </div>

            <div className='flex flex-col items-center'>
              <span className='text-4xl md:text-8xl p-4 mb-1 md:mb-2 bg-gradient-to-b from-white/30 via-white/20 to-white/5 rounded-md'>
                {zeroPad(seconds)}
              </span>
              <span className='text-2xl md:text-4xl tracking-widest'>Sec</span>
            </div>

          </div>
        )
      }}/>
  )
}

export default CountDown
