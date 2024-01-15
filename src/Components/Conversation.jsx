import React from 'react'
import styled from 'styled-components'
import conversationImage from '../assets/illustration-flowing-conversation.svg'

const Conversation = () => {
  return (
    <Container>
        <Wrapper>
            <Hold>
                <ImageDiv>
                    <img src={conversationImage} alt="" />
                </ImageDiv>

                <TextDiv>
                    <h2>Flowing Conversation</h2>
                    <p>
                        You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow. 
                    </p>
                </TextDiv>
            </Hold>
        </Wrapper>
    </Container>
  )
}

export default Conversation

const Container = styled.div`
    width: 100%;
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
    /* flex-wrap: wrap; */

    @media (max-width: 700px) {
        flex-direction: column;
    }
`

const ImageDiv = styled.div`
width: 350px;
margin-left: 70px;

img {
    width: 100%;
}

@media (max-width: 700px) {
    margin: 0;
    width: 270px;
    margin-bottom: 30px;
}
`

const TextDiv = styled.div`
    width: 420px;
    margin-left: 70px;

    p {
        color: gray;
    }

    @media (max-width: 700px) {
        margin: 0;
        width: 95%;
        text-align: center;
    }
`