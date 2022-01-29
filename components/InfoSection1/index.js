import React from 'react'
import { Link } from 'react-router-dom'

import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, Column3, Column4, ImgWrap,Img, Button} from './infoElements1'

const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headline,darkText,description,buttonLabel,img2,imgr,imgt,imgs,alt,primary,dark,dark2}) => {
    return (
        <>
          <InfoContainer lightBg = {lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                    <Button > <Link to='/userpage' style={{color:"red", background:"transparent", textDecoration:"none"}}>
                Check out for review  </Link></Button>
                        <Column1>
                            <ImgWrap>
                            <Img src={img2} alt = {alt} width="600" height="400"/>
                            </ImgWrap>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                            <Img src={imgr} alt = {alt} width="600" height="400"/>
                            </ImgWrap>
                        </Column2>
                        <Column3>
                            <ImgWrap>
                            <Img src={imgt} alt = {alt} width="600" height="400"/>
                            </ImgWrap>
                        </Column3>
                        <Column4>
                            <ImgWrap>
                            <Img src={imgs} alt = {alt} width="600" height="400"/>
                            </ImgWrap>
                        </Column4>
                    </InfoRow>
                </InfoWrapper>
           </InfoContainer>  
        </>
    )
}

export default InfoSection
