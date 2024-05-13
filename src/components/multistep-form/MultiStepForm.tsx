import React from 'react'
import UserDetails from './UserDetails'
import ProfileInfo from './ProfileInfo'
import Preferences from './Preferences'
import Feedback from './Feedback'

const MultiStepForm = () => {
  return (
    <div className='flex flex-row justify-center items-center'>
        <UserDetails/>
        <ProfileInfo/>
        <Preferences/>
        <Feedback/>
    </div>
  )
}

export default MultiStepForm