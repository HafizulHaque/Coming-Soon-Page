'use client'

import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

const Notify = () => {

  const URL = process.env.NEXT_PUBLIC_MAILCHIMP_API_URL

  const { loading, error, success, message, handleSubmit } = useMailChimpForm(URL);
  
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: ""
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    handleSubmit(fields);
  }

  return (
    <div className='flex flex-col items-center'>
      <p className='text-2xl md:text-3xl mb-4 mx-4 md:mx-8 text-center'>We will let you know when we are launching</p>
      <form 
        className='w-full flex mb-4'
        onSubmit={handleSubscribe}>
        <input
          id='EMAIL'
          className='flex-1 p-2 md:py-3 md:px-6 outline-0 rounded-l-md md:rounded-l-lg text-md md:text-xl text-slate-500'
          type="email" 
          placeholder='Enter your email address'
          value={fields.EMAIL} 
          onChange={handleFieldChange}/>
        <button 
          className='bg-cyan-400 p-2 md:py-3 md:px-8 rounded-r-md md:rounded-r-lg text-md md:text-xl'
          onClick={handleSubscribe}>NOTIFY ME</button>
      </form>
      <p className='text-md md:text-xl text-center'>
        {
          loading ? 'Subscribing...' :
          error ? message.substring(3) : 
          success ? message :
          ''
        }
      </p>
    </div>
  )
}

export default Notify
