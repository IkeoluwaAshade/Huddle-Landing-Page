import React from 'react'
import Hero from '../Components/Hero'
import GrowTogether from '../Components/GrowTogether'
import Conversation from '../Components/Conversation'
import Users from '../Components/Users'
import Footer from '../static/Footer'


const Home = () => {
  return (
    <div>
        
      <Hero />
      <GrowTogether />
      <Conversation />
      <Users />
      <Footer />
                
    </div>
  )
}

export default Home