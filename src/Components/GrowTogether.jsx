import React from 'react'
import styled from 'styled-components'
import GrowTogetherImg from "../assets/illustration-grow-together.svg"

const GrowTogether = () => {
  return (
    <Container>
        <Wrapper>
            <Hold>
                <TextDiv>
                    <h2>Grow Together</h2>
                    <p>
                        Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.
                    </p>
                </TextDiv>
                <ImgDiv>
                    <img src={GrowTogetherImg} alt="An Illustration svg of grow together" />
                </ImgDiv>
            </Hold>
        </Wrapper>
    </Container>
  )
}

export default GrowTogether

const Container = styled.div`
    width: 100%;
    margin-bottom: 100px;
    font-family: "Poppins";

    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    width: 85%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

`

const Hold = styled.div`
    padding: 40px 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 700px) {
        flex-direction: column-reverse;
    }

`

const TextDiv = styled.div`
    width: 420px;
    margin-right: 70px;

    h2 {
        color: hsl(192, 100%, 9%);
    }

    p {
        color: hsl(208, 11%, 55%);
    }

    @media (max-width: 700px) {
        margin: 0;
        width: 95%;
        text-align: center;
    }
`

const ImgDiv = styled.div`
    width: 400px;
    margin-left: 70px;

    img {
        width: 100%;
    }

    @media (max-width: 700px) {
        margin: 0;
        margin-bottom: 30px;
        width: 300px;
    }
`
