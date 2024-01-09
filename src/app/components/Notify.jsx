'use client'

import { useState } from 'react'
import style from './Notify.module.css'

const Notify = () => {

  const [email, setEmail] = useState("")

  const handleSubmit = () => {
    console.log(email)
  }

  return (
    <div className={style.container}>
      <div className={style.parent}>
        <input 
          className={style.input} 
          type="email" 
          placeholder='Enter your email address'
          value={email} 
          onChange={e => setEmail(e.target.value)}/>
        <button 
          className={style.btn} 
          onClick={handleSubmit}>NOTIFY ME</button>
      </div>
      <p className={style.msg}></p>
    </div>
  )
}

export default Notify
