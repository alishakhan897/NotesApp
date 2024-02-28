// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
   height:100vh;
   display:flex;
   justify-content:center;
   align-items:center;
`
export const SmallContainer = styled.div`
   width:50%;
   display:flex;
   flex-direction:column;
   align-items:center;
 
  
`
export const Card = styled.form`
   width:90%;
   padding:20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`

export const Heading = styled.h1`
  color:#4c63b6;
  font-family:'Bree-Serif';
  text-align:center;
`
export const Input = styled.input`
   width:100%;
   background-transparent;
   border:0px;
   padding:9px;
   border:none;
   outline:none;
   margin-bottom:25px;
`

export const TextArea = styled.textarea`
   width:100%;
   background-transparent;
   border:0px;
   padding:9px;
   border:none;
   outline:none;
   margin-bottom:25px;
`
export const ButtonDiv = styled.div`
   width:100%;
   display:flex;
   justify-content:flex-end;
   align-items:flex-end;
`
export const Button = styled.button`
   background-color:#4c63b6;
   border-radius:12px;
   border:0px;
   padding: 12px 20px 12px 20px;
   outline:none;
   color:white;
`
export const Card2 = styled.ul`
  width:90%;
  list-style-type:none;
  margin:0px;
  padding:0px;
  display:flex;
  margin-top:45px;
  flex-wrap:wrap;
  justify-content:space-between;
`
