import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/authContext'

export const Navbar = () => {
  const {user, signout}=UserAuth()
  const navigate=useNavigate()
  

  const handleSignOut=async ()=>{
    try {
      await signout()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to="/">
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>Netflix</h1>
      </Link>
        {user?.email? <div>
          <Link to='/account'>
            <button className='text-white pr-4'>
                Account
            </button>
          </Link>

          
          <button onClick={handleSignOut} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Out</button>
          
        </div>    
        
        :
        
        <div>
          <Link to='/signin'>
            <button className='text-white pr-4'>
                Sign In
            </button>
          </Link>

          <Link to="/signup">
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
          </Link>
        </div>}
    </div>
  )
}