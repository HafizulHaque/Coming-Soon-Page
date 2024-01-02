import style from './CountDown.module.css'

const CountDown = ({estimatedDate}) => {
  return (
    <div className={style.container}>
      <div className={style.item}><span>14</span><span>Days</span></div>
      <div className={style.item}><span>23</span><span>Hours</span></div>
      <div className={style.item}><span>49</span><span>Minutes</span></div>
      <div className={style.item}><span>34</span><span>Seconds</span></div>
    </div>
  )
}

export default CountDown
