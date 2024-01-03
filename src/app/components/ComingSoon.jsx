import style from './CommingSoon.module.css'
import CountDown from './CountDown'
import Progress from './Progress'
import Notify from './Notify'

const ComingSoon = () => {
  return (
    <div className={style.container}>
      <h1 className={style.mainText}>Website Coming Soon!</h1>
      <p className={style.subText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati quaerat hic dolorem aut nesciunt, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati..
      </p>
      <CountDown estimatedDate="2024-12-27"/>
      <Progress value={32}/>
      <Notify/>
      <button className={style.btn}>More Info</button>
    </div>
  )
}

export default ComingSoon
