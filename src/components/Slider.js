import styled from "styled-components"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState } from "react"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    height: 50px;
    width: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom:0;
    left: ${props => props.left && "10px"};
    right: ${props => props.right && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => (props.slideIndex)*(-100)}vw);
    transition: all 1s ease;
`

const Slide = styled.div`
    width:100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=> props.bg};
`
const ImgContainer = styled.div`
    height: 100%;
    flex:1;
`
const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex:1;
    padding:50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleSlideNav = (dir) => {
        if(dir==='prev'){
            setSlideIndex(slideIndex===0 ? 2 : slideIndex - 1)
        }
        else{
            setSlideIndex(slideIndex===2 ? 0 : slideIndex + 1)
        }
    }

    return (
        <Container>
            <Arrow left onClick={()=>handleSlideNav('prev')}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                <Slide bg="f5fafd">
                    <ImgContainer>
                        <Image src="https://i.ibb.co/DG69bQ4/2.png"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>    
                        <Button>SHOP NOW</Button>
                    </InfoContainer>  
                </Slide>
                <Slide bg="fcf1ed">
                    <ImgContainer>
                        <Image src="https://i.ibb.co/cXFnLLV/3.png"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>WINTER SALE</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>    
                        <Button>SHOP NOW</Button>
                    </InfoContainer>  
                </Slide>
                <Slide bg="fbf0f4">
                    <ImgContainer>
                        <Image src="https://i.ibb.co/DG69bQ4/2.png"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>POPULAR SALE</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>    
                        <Button>SHOP NOW</Button>
                    </InfoContainer>  
                </Slide>
            </Wrapper>
            <Arrow right onClick={()=>handleSlideNav('next')}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider
