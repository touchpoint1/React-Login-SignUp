import React from 'react'
import Header from '../components/Header'
import Signup from '../components/Signup.js'

export default function SignupPage  () {
  return(
    <>
     <Header
       heading="Create your account"
       paragraph="Already have an account? "
       linkName="Login"
       linkUrl="/"
     />
     <Signup/>
    </>
  )
}
