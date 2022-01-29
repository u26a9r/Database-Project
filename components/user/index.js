import React from 'react'
import Navbar from '../Navbar1'
import Footer from '../../components/Footer'
import HeroSection1 from '../HeroSection1'
import InfoSection from '../InfoSection1'
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from '../InfoSection1/Data'
const user = () => {
   
    return (
        <>
        <Navbar />
        <HeroSection1/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
        <InfoSection {...homeObjFour}/>
        <Footer />

        </>
    )
}

export default user