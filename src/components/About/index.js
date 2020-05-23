import React from 'react';
import CommitmentImg from '../../assets/commitment.svg'
import PolicyImg from '../../assets/policyIcon.svg'
import AgricModelImg from '../../assets/agricModel.svg'
import coverImg from '../../assets/coverImg.svg'
import coverImgtwo from '../../assets/coverImgtwo.svg'
import coverImgthree from '../../assets/coverImgthree.svg'
import './index.css'

const About = () => {
    return (
        <div className='about__container'>
            <img className='cover__img__one' src={coverImg}></img>
            <img className='cover__img__two' src={coverImgtwo}></img>
            <img className='cover__img__three' src={coverImgthree}></img>
            <div  className='about__subsection'>
                <div className='about__text'>
                    <h1 className="commitment__header">Our Commitment</h1>
                   <div className='commitment'>The AgroCola’s commitment is to create opportunities for the youth to thrive by engaging in 
                agriculture and various agribusinesses. AgroCola is the integrated agricultural production platform that is built on digital technology. </div> 
                </div>
                <div className='commitment__img__container'>
                    <img className='commitment__img' src={CommitmentImg} alt='boys fixing puzzle.'></img>
                </div>
            </div>
            <div  className='about__subsection policies__container'>
                <div className='about__text'>
                    <h1 className="commitment__header">Our <br></br>Policies and Resolution</h1>
                   <div className='commitment'>AgroCola provides Nigeria’s young farmers and agriculture value chain participants with an opportunity to create market influence, improve productivity, improve returns, and rightly position to
                    compete in a national and international marketplace. </div> 

                    <div className='read__more'>Read More</div>
                </div>
                <div className='policy__img__container'>
                    <img className='policy__img' src={PolicyImg}></img>
                </div>
            </div>
            <div  className='about__subsection'>
                <div className='about__text'>
                    <h1 className="commitment__header">Our Sustainable Agriculture <br/> Philosophy</h1>
                   <div className='commitment'>Our sustainable agriculture approach is anchored on the use of best available knowledge, technologies, and practices to ensure that intensification delivers more with minimal environmental impacts. </div> 

                    <div className='read__more__two'>Read More</div>
                </div>
                <div className='model__img__container'>
                    <img className='model__img' src={AgricModelImg}></img>
                </div>
            </div>
        </div>
    );
};

export default About;