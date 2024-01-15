import React from 'react'
import styled from 'styled-components'
import UserImage from '../assets/illustration-your-users.svg'

const Users = () => {
  return (
    <Container>
        <Wrapper>
            <Hold>
                <TextDiv>
                    <h2>Yours Users</h2>
                    <p>
                        It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately. 
                    </p>
                </TextDiv>

                <ImageDiv>
                    <img src={UserImage} alt="An Illustrative Image of the Users" />
                </ImageDiv>
            </Hold>
        </Wrapper>
    </Container>
  )
}

export default Users

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

    p {
        color: gray;
    }

    @media (max-width: 700px) {
        margin: 0;
        width: 95%;
        text-align: center;
    }
`

const ImageDiv = styled.div`
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