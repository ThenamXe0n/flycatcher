import React from 'react'
import NavBar from '../components/Navigation/NavBar'
import UserProfile from '../components/profile/UserProfile'
import Breadcrums from '../components/Navigation/Breadcrums'
import Footer from '../components/Footer'

const UserProfilePage = () => {
  return (
    <>
    <NavBar />
    <UserProfile />
    <Footer />
    </>
  )
}

export default UserProfilePage