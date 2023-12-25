import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/logo.svg'
import BgDesktop from '../../assets/bg-hero-desktop.svg'
import BgMobile from '../../assets/bg-hero-mobile.svg'

const Header = () => {
  return (
    <Container>
        <Wrapper>
            <LogoDiv>
                <img src={Logo} alt="The Huddle Logo" />
            </LogoDiv>

            <Tryitfree>
                Try it free
            </Tryitfree>
        </Wrapper>

    </Container>
  )
}

export default Header

const Container = styled.div`
    background-image: url(${BgDesktop});
    width: 100%;
    height: 100px;
    /* margin-top: 21px; */


    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px) {
        background-image: url(${BgMobile});
        margin-top: 51px;
        margin-bottom: 100px;
    }
`

const Wrapper = styled.div`
    /* background-color: #123456; */
    padding: 8px;
    width: 75%;
    margin-top: 21px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 500px) {
        width: 95%;
        margin-top: 21px;
    }
`

const LogoDiv = styled.div`
    
    img {
        width: 170px;

        @media (max-width: 500px) {
            width: 120px;
            padding-left: 18px;
        }
    }
`

const Tryitfree = styled.button`
    background-color: #fff;
    padding: 7px 27px;
    border-radius: 30px;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-style: none;

    @media (max-width: 500px) {
        padding: 4px 21px;
    }
`

