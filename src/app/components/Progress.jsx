import style from './Progress.module.css'

const Progress = ({value}) => {
  return (
    <div className={style.container}>
      <progress className={style.progressbar} value={value} max="100">{value}%</progress>
    </div>
  )
}

export default Progress
