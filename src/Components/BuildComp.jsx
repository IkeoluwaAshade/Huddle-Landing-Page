import React from 'react'
import styled from 'styled-components'

const BuildComp = () => {
  return (
    <Container>
        <Card>
            <h2>Ready To Build Your Community?</h2>
            <button>Get Started For Free</button>
        </Card>
    </Container>
  )
}

export default BuildComp

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const Card = styled.div`
    background-color: #fff;
    width: 450px;
    height: 200px;
    font-family: "Poppins";
    margin-bottom: -80px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
        background-color: hsl(322, 100%, 66%);
        color: hsl(193, 100%, 96%);
        height: 40px;
        width: 200px;
        font-family: "Poppins";
        font-weight: 600;
        border-radius: 100px;
        border-style: none;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);     
    }

    @media (max-width: 450px) {
        width: 300px;
    }
`