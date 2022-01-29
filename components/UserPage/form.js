import styled from 'styled-components'

export const Heroform1 = styled.form`

background: rgba(0, 0, 0, 0.7);
max-width: 2000px;
width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  margin-top: -100px;
  padding: 100px 32px;
  border-radius: 8px;
  box-shadow: 0 1px 3px white;

  @media screen and (max-width: 400px){
      padding: 32px 32px;
  }

`

export const Herorev = styled.form`
background: rgba(0, 0, 0, 0.0);
max-width: 300px;
height: 500px;
width:100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  margin-top: -7900px;
  margin-left:1100px;
  padding: 100px 32px;


  @media screen and (max-width: 400px){
      padding: 32px 32px;
  }
`

export const InputRev = styled.input`
    background: white;
    width: 200px;
    height: 90px;
    border: none;
    border-radius:16px;
    color: black;
`

export const  ButtonRev = styled.button`
    background: red;
    width: 200px;
    border: none;
    border-radius: 16px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    font-weight: 600;
    height: 100px;
`