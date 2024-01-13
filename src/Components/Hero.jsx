import React from 'react'
import styled from 'styled-components'
import Header from '../static/Header'
import BgDesktop from '../assets/bg-hero-desktop.svg'
import BgMobile from "../assets/bg-hero-mobile.svg"
import Mockup from '../assets/illustration-mockups.svg'


const Hero = () => {
  return (
    <Background>
        <Header />
        <Container>
            <Wrapper>
                <TextDiv>
                    <Title>Build The Community <br /> Your Fans Will Love</Title>
                    <Content>
                        Huddle re-imagines the way we build communities. You have <br /> a voice, but so does your audience. Create connections with <br /> your users as you engage in genuine discussion.
                    </Content>
                    <button>Get Started For Free</button>
                </TextDiv>

                <ImageDiv><img src={Mockup} alt="" /></ImageDiv>
            </Wrapper>
        </Container>
    </Background>
  )
}

export default Hero

const Background = styled.div`
    background-image: url(${BgDesktop});
    background-color: #edfbfe;
    min-height: 85vh;
    width: 100%;
    height: 100%;

    @media (max-width: 500px) {
        background-image: url(${BgMobile});
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    width: 85%;
    font-family: "Poppins";
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const TextDiv = styled.div`
    width: 500px;
    margin-right: 70px;

    @media (max-width: 800px) {
        margin: 0;
        margin-bottom: 30px;
        text-align: center;

        display: flex;
        align-items: center;
        flex-direction: column;
    }

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
`

const Title = styled.div`
    font-size: 35px;
`

const Content = styled.div`
    color: hsl(208, 11%, 55%);
    margin-bottom: 20px;
`

const ImageDiv = styled.div`
    width: 600px;
    margin-left: 60px;

    @media (max-width: 800px) {
        margin: 0;
    }

    img {
        width: 100%;
    }
`














// import React from 'react'
// import styled from 'styled-components'
// import Header from '../static/Header'
// import BgDesktop from '../assets/bg-hero-desktop.svg'
// import BgMobile from "../assets/bg-hero-mobile.svg"
// import Mockup from '../assets/illustration-mockups.svg'

// const Hero = () => {
//   return (
//     <Background>
//         <Header />
//         <Container>
//             <Wrapper>

//                 <TextDiv>
//                     <Title>
//                         Build The Community <br /> Your Fans Will Love
//                     </Title>

//                     <Content>
//                         Huddle re-imagines the way we build communities. You have <br /> a voice, but so does your audience. Create connections with <br /> your users as you engage in genuine discussion.
//                     </Content>

//                     <button>
//                         Get Started For Free
//                     <button>

//                 </TextDiv>

//                 <ImgDiv>
//                     <img src={Mockup} alt="" />
//                 </ImgDiv>

//             </Wrapper>
//         </Container>
//     </Background>
//   )
// }

// export default Hero

// const Background = styled.div`
//     background-image: url(${BgDesktop});
//     min-height: 85vh;
//     width: 100%;
//     height: 100%;
//     background-color: #edfbfe;
// `

// const Container = styled.div`
//     width: 100%;

//     display: flex;
//     justify-content: center;
//     align-items: center;

    
// `

// const Wrapper = styled.div`
//     width: 85%;
//     font-family: "Montserrat";
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-wrap: wrap;

    
// `

// const TextDiv = styled.div`
    
//     width: 500px;
//     margin-right: 70px;

   
        
//         @media (max-width: 800px) {
//             display: flex;
//             align-items: center;
//             flex-direction: column;
//             margin: 0;
//             margin-bottom: 30px;
//             text-align: center;
//         }

//         button {
//             background-color: hsl(322, 100%, 66%);
//             color: hsl(193, 100%, 96%);
//             height: 40px;
//             width: 200px;
//             font-family: "Montserrat";
//             font-weight: 600;
//             border-radius: 100px;
//             border-style: none;
//             box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);        
//         }

//     p {
//         color: hsl(208, 11%, 55%);
//         padding-right: 20px;
//         font-size: 18px;

//         @media (max-width: 500px) {
            
//             margin-bottom: 2.5rem;
            
//         }
//     }

//     @media (max-width: 500px) {
//         text-align: center;
//         margin-bottom: 3rem;
//     }
// `

// const Title = styled.h1`
    
// `

// const ImgDiv = styled.div`

//     img {
//         width: 500px;

//         @media (max-width: 500px) {
//             width: 290px;
//             margin-bottom: 8rem;
//         }
//     }
// ` 

