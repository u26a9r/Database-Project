import styled from 'styled-components'

export const InfoContainer = styled.div`
background: transparent;
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606') };

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
background: transparent;
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center; 
`

export const InfoRow = styled.div`
margin-left:200px;
background: transparent;
    display: grid;
    grid-auto-columns: minmax(auto, lfr);
    align-items: center;
    grid-template-areas: ${({imgStart})=>(imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart})=> (imgStart ? `'col1' 'col2' 'col3' 'col4'` : `'col1 col1' 'col2 col2' 'col3 col3' 'col4 col4'`)};
    }
`

export const Column1 = styled.div`
background: transparent;
    
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
background: transparent;
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const Column3 = styled.div`
background: transparent;
    margin-bottom: 15px;
    margin-top: -850px;
    padding: 0 15px;
    grid-area: col3;
`

export const Column4 = styled.div`
background: transparent;
    margin-bottom: 15px;
    margin-left: 300px;
    margin-top: -850px;
    padding: 0 15px;
    grid-area: col3;
`

export const TextWrapper = styled.div`
background: transparent;
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
background: transparent;
    color: red;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;    
`

export const Heading = styled.h1`
background: transparent;
     margin-bottom: 24px;
     font-size: 48px;
     line-height: 1.1;
     font-weight: 600;
     color: ${({ lightText}) => (lightText ? '#f7f8fa' : '#010606')};

     @media screen and (max-width: 480px) {
         font-size: 32px;
     }
`

export const Subtitle = styled.p`
background: transparent;
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText}) => (darkText ? 'black' : '#fff')};
`
export const BtnWrap = styled.div`
background: transparent;
     display: flex;
     justify-content: flex-start;
`

export const ImgWrap = styled.div`
background: transparent;
    max-width: 100%;
    height: 100%;
`
export const Img = styled.img`
background: transparent;
     width: 250px;
     margin: 114px 23px 77px 10px;
     padding-right: 0;
`

export const Button = styled.button`
      background: transparent;
      padding: 10px 0px;
      border: none;
      border-radius: 10px;
      color: black;
      font-size: 30px;
      cursor: pointer;
      font-weight: 600;
`
