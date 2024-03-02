import CountDown from './CountDown'
import Progress from './Progress'
import Notify from './Notify'
import { IoIosRocket } from "react-icons/io";

const ComingSoon = () => {
  return (
    <div className='w-full md:w-2/3 mx-auto h-screen flex items-center justify-center p-2 md:p-4 text-white'>
      <div>
        <h1 className='text-7xl font-medium mb-8'>Launching Soon <IoIosRocket className='inline'/></h1>
        <CountDown estimatedDate="2024-12-27"/>
        {/* <Progress value={70}/> */}
        <Notify/>
        {/* <button>More Info</button> */}
      </div>
    </div>
  )
}

export default ComingSoon
