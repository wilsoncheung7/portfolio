import React from 'react';
import '../../assets/scss/Main.scss';
import butterfly from '../../assets/images/butterfly.jpg'
import bang_drem from '../../assets/images/bang_dream.jpg'
import { Slide } from 'react-slideshow-image';
import ComplexGrid from './Main'

const slideImages = [
    butterfly,
    bang_drem,
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}

export default function Main() {
    return (
        <div className="main">
            <div className="slide-container">
                <Slide {...properties}>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                            {/* <span>Slide 1</span> */}
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                            {/* <span>Slide 2</span> */}
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                            {/* <span>Slide 3</span> */}
                        </div>
                    </div>
                </Slide>
            </div>
            <ComplexGrid/>
        </div>
    )
}