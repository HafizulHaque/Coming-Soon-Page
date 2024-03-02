import CountDown from './CountDown'
import Notify from './Notify'
import { IoIosRocket } from "react-icons/io";

const ComingSoon = () => {
  return (
    <div className='lg:w-2/3 mx-auto h-full flex items-center justify-center p-2 md:p-4 text-white'>
      <div>
        <h1 className='text-6xl md:text-7xl font-medium mb-8 text-center'>Launching Soon <IoIosRocket className='inline'/></h1>
        <CountDown/>
        <Notify/>
      </div>
    </div>
  )
}

export default ComingSoon
