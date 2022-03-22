


import styled from 'styled-components'


export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`

export const StopSpending = styled.button`
width: 100%;
height: 60px;
background-color: #739900;
position: sticky;
bottom: 0px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
margin-top: 10px;
color: white;
font-size: 24px;
cursor: pointer;
animation-duration: 1s;
:hover{
    background-color: yellow;
    color: black;
    animation-duration: 1s;
}

`