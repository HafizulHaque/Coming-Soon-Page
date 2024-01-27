const Progress = ({value}) => {
  return (
    <div>
      <div style={{width: `${value}%`}}>{value}%</div>
    </div>
  )
}

export default Progress
