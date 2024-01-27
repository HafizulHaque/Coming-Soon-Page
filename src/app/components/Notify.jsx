'use client'

import { useState } from 'react'

const Notify = () => {

  const [email, setEmail] = useState("")

  const handleSubmit = () => {
    console.log(email)
  }

  return (
    <div>
      <div>
        <input
          type="email" 
          placeholder='Enter your email address'
          value={email} 
          onChange={e => setEmail(e.target.value)}/>
        <button 
          className='bg-slate-500'
          onClick={handleSubmit}>NOTIFY ME</button>
      </div>
      <p></p>
    </div>
  )
}

export default Notify
