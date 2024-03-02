'use client'

import { useState } from 'react'
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

const Notify = () => {

  const URL = process.env.MAILCHIMP_API_URL

  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='flex flex-col items-center'>
      <p className='text-3xl mb-4 mx-4 md:mx-8'>We will let you know when we are launching</p>
      <div className='w-full flex mb-4'>
        <input
          className='flex-1 py-3 px-6 outline-0 rounded-l-lg text-xl text-slate-500'
          type="email" 
          placeholder='Enter your email address'
          value={email} 
          onChange={e => setEmail(e.target.value)}/>
        <button 
          className='bg-cyan-400 py-3 px-8 rounded-r-lg text-xl'
          onClick={handleSubmit}>NOTIFY ME</button>
      </div>
      <p className='text-xl'>Subscribed. We will keep you updated!</p>
    </div>
  )
}

export default Notify
