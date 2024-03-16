import React from 'react'
import Header from "../components/Header"
import Login from '../components/Login.js'

export default function LoginPage(){
    return(
        <>
        
            
             <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
             <Login/>
             
        </>
    )
}