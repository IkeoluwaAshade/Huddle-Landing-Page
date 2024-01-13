import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'

const Header = () => {
  return (
    <Container>
        <Wrapper>
            <LogoDiv><img src={Logo} alt="The Huddle Logo" /></LogoDiv>
            <Button>Try It Free</Button>
        </Wrapper>
    </Container>
  )
}

export default Header

const Container = styled.div`
    width: 100%;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LogoDiv = styled.div`
    width: 150px;

    img {
        width: 100%;
    }
`

const Button = styled.button`
    background-color: #fff;
    height: 40px;
    width: 170px;

    font-family: "Poppins";
    font-weight: 600;

    border-radius: 100px;
    border-style: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); 
    cursor: pointer;
`

















// import React from 'react'
// import styled from 'styled-components'
// import Logo from '../assets/logo.svg'


// const Header = () => {
//   return (
//     <Container>
//         <Wrapper>
//             <LogoDiv>
//                 <img src={Logo} alt="The Huddle Logo" />
//             </LogoDiv>

//             <Tryitfree>
//                 Try it free
//             </Tryitfree>
//         </Wrapper>

//     </Container>
//   )
// }

// export default Header

// const Container = styled.div`
//     width: 100%;
//     height: 100px;
//     background-color: skyblue;


//     display: flex;
//     justify-content: center;
//     align-items: center;

//     @media (max-width: 500px) {
//         margin-top: 51px;
//         margin-bottom: 100px;
//     }
// `

// const Wrapper = styled.div`
//     background-color: #123456;
//     width: 85%;

//     display: flex;
//     justify-content: space-between;
//     align-items: center;

//     @media (max-width: 500px) {
//         width: 95%;
//         margin-top: 21px;
//     }
// `

// const LogoDiv = styled.div`
    
//     width: 130px;
//     background-color: red;

//     img {
//         width: 100%;
//     }

//     @media (max-width: 500px) {
//         width: 120px;
//         padding-left: 18px;
//     }
    
// `

// const Tryitfree = styled.button`
//     background-color: #fff;
//     height: 40px;
//     width: 170px;
    
//     font-family: "Poppins";
//     font-weight: 600;
//     border-radius: 100px;
//     border-style: none;
    
//     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
//     cursor: pointer;
    

//     @media (max-width: 500px) {
//         width: 120px;
//         height: 30px;
//         padding: 4px 21px;
//     }
// `

