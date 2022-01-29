import styled from 'styled-components'

export const Heroform = styled.form`

background: rgba(0, 0, 0, 0.7);
max-width: 400px;
height: 500px;
width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 100px 32px;
  border-radius: 8px;
  box-shadow: 0 1px 3px white;

  @media screen and (max-width: 400px){
      padding: 32px 32px;
  }

`