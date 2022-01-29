import React from 'react'
import Video from '../../videos/video3.mov'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP} from './HeroElements1'
 

const HeroSection1 = () => {

    

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mov' />
            </HeroBg>
            <HeroContent>
                 <HeroH1>In this Christmas Eve </HeroH1><HeroH1>Enjoy your day by watching Movies and TV Shows</HeroH1>
                 <HeroP>Watch over the Best Movies and TV Shows</HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection1
