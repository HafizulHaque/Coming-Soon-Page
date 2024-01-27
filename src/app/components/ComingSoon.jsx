import CountDown from './CountDown'
import Progress from './Progress'
import Notify from './Notify'
import { IoIosRocket } from "react-icons/io";

const ComingSoon = () => {
  return (
    <div>
      <h1>Launching Soon <IoIosRocket/></h1>
      <CountDown estimatedDate="2024-12-27"/>
      <Progress value={70}/>
      <Notify/>
      <button>More Info</button>
    </div>
  )
}

export default ComingSoon
