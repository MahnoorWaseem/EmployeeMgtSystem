import React, { useState } from 'react'

export const Login = ({handleLogin}) => {
// console.log(handleLogin)
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const submitHandler = (e) =>{
    e.preventDefault();
    // console.log('email', email)
    // console.log('p/w', password)
    handleLogin(email,password)
    setemail('')
    setpassword('')
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 p-20 border-emerald-600 rounded-xl'>
            <form 
            onSubmit={(e)=>{
              submitHandler(e)
            }}
            className='flex flex-col items-center justify-center' >
                <input 
                value={email} //optional
                onChange={(e)=>{
                 setemail(e.target.value)
                 
                }}
                required 
                className='border-2 border-emerald-600 py-3 px-5 text-xl text-gray-600 rounded-full outline-none bg-transparent placeholder:text-gray' type="email" placeholder ='Enter your email' />

                <input 
                value={password}
                onChange={(e)=>{
                  setpassword(e.target.value)
                }}
                required className='border-2 border-emerald-600 py-3 px-5 text-xl text-gray-600 rounded-full outline-none bg-transparent placeholder:text-gray mt-4' type="password" placeholder='Enter password' />

                <button className='border-2 border-emerald-600 py-3 px-5 text-xl text-white-600 rounded-full outline-none bg-emerald-600 px-10 mt-7 '>Log In</button>
            </form>

        </div>

    </div>
  )
}
