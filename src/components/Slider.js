import React, {useState} from 'react';
import { Container, IconButton } from '@material-ui/core';

const TOTAL_SLIDES = 2;
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [ImageNum, setImageNum] = useState(1);

const nextSlide = () => {
    if (currentSlide === TOTAL_SLIDES) {
        alert('마지막 페이지 입니다');
    } else if (currentSlide >= TOTAL_SLIDES) {
        setCurrentSlide(0);
        setImageNum(1)
    } else {
        setCurrentSlide( currentSlide +1);
        setImageNum (ImageNum + 1);
    }
};
const prevSlide = () => {
    if (currentSlide === TOTAL_SLIDES) {
        //마지막페이지
        setCurrentSlide(currentSlide -1);
        setImageNum (2);
    } else if( currentSlide === 1 ) {
        //두번째페이지
        setCurrentSlide(currentSlide - 1);
        setImageNum(1)
    } else if (currentSlide === 0 ) {
        alert('첫번째 페이지 입니다.')
    } 
};
    console.log(ImageNum)

    return (
        <Container>
            현재 페이지 :{currentSlide}
            <Container>
                <img src={require(`../assets/images/${ImageNum}.png`).default} style={{width:'100%'}}/>
                {/* <Slide img={img1}></Slide> */}
            </Container>
            <IconButton onClick={prevSlide}>이전</IconButton>
            <IconButton onClick={nextSlide}>다음</IconButton>
        </Container>
    );
};

export default Slider;