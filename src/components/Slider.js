import React, {useState, useEffect, useRef} from 'react';
import { Container, IconButton } from '@material-ui/core';

const TOTAL_SLIDES = 2;
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [ImageNum, setImageNum] = useState(1);
    // const slideRef = useRef(null);

    // const Image = '../assets/images/' + ImageNum + '.png';
    console.log(ImageNum, Image);

const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
        // 슬라이드 초기화
        setCurrentSlide(0);
        setImageNum(1)
    } else {
        setCurrentSlide( currentSlide +1);
        setImageNum (ImageNum + 1);

    }
};
const prevSlide = () => {
    if (currentSlide === 0) {
        setCurrentSlide(TOTAL_SLIDES);
    } else {
        setCurrentSlide(currentSlide -1);
        setImageNum (ImageNum -1);
    }
};

// useEffect(() => {
//     slideRef.current.style.transition = "all 0.5s ease-in-out";
//     slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
//   }, [currentSlide]);

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