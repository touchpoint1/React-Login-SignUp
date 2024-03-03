import React from 'react'
import '../login.css'

function Loginform(){
    return(
        <div className='wrapper align-items-center justify-content-center w-100'>
        <div className='login'>
            <h2 className='login'>Login</h2>
            <form action="">
            <div className='form-group'>
                <label htmlFor="email" className='form-label'>Email</label>
                <input type="email"className='form-control'></input>
            </div>
            <div className='form-group'>
                <label htmlFor="password" className='form-label'>Password</label>
                <input type="password" className='form-control'></input>
            </div>
            <div className='form-group'>
                <input type="checkbox" className='form-check-input'></input>
                <label htmlFor="checkbox" className='form-check-label'>Remeber Me</label>
            </div>
            <button type='submit' className='btn btn-success blocl mt-2'>SIGN IN</button>
            </form>
        </div>
        </div>
    )
}

export default Loginform;