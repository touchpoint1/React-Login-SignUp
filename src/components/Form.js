import React from 'react'

export default function Form  () {
  return (
    <div className='bg-white px-10 py-20 rounded-3xl'>
        <h1 className='text-5xl font-semibold text-center'>Sign In</h1>
        <div className='mt-8'>
            <div>
                <label className='text-lg font-medium'>Email:</label>
                <input type='email' className='w-full border-2 border-gray-200 rounded-xl mt-1 p-4 bg-transparent' placeholder='Enter your email'/>
            </div>
            <div>
                <label className='text-lg font-medium'>Password:</label>
                <input type="password" className='w-full border-2 border-gray-200  rounded-xl mt-1 p-4 bg-transparent' placeholder='Enter your password'/>
            </div>
            <div className='mt-6 flex items-center justify-between'>
               <div>
                 <input type="checkbox" id="remember"/>
                 <label className='ml-2 font-medium text-base' for="remember">Remember me</label>
                </div> 
                <button className='font-medium text-base text-violet-600'>Forgot Password?</button>
            </div>
            <div className='mt-8 flex flex-col gap-y-4'>
                <button className='py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'>Sign In</button>
                <button>Don't have an account?<a href='sign' className='text-violet-500'> Sign up here</a></button>

            </div>
        </div>
    </div>
  )
}
