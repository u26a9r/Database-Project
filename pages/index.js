import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
//import Sidebar from '../components/Sidebar'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/InfoSection/Data'
import Footer from '../components/Footer'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Navbar toggle = {toggle}/>
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
        <InfoSection {...homeObjFour}/>
        <Footer />
        {/* <Sidebar  isOpen={isOpen} toggle={toggle}/> */}

        </>
    )
}

export default Home
