import style from './Progress.module.css'

const Progress = ({value}) => {
  return (
    <div className={style.container}>
      <div className={style.progressbar} style={{width: `${value}%`}}>{value}%</div>
    </div>
  )
}

export default Progress
