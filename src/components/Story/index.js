import React from 'react';
import Picture from '../../assets/picture.svg'
import AccountImg from '../../assets/createAccount.svg';
import coverImgSix from '../../assets/coverImgsix.svg';
import coverImgSeven from '../../assets/coverImgseven.svg';
import './index.css'
const Story = () => {
    return (
        <div className="story__container">
            <div className='story'>
            <div className="story__title">Hear Our Story</div>
            </div>
            <div className="story__content">
                <div className="story__details">
                <img className="story__image" src={Picture} alt="an image of a young man in his 20s."></img>
                </div>
            </div>
            <div class="story__text__container">
            <div className="story__text">
            Let's reshape the future of agriculture, one crop at a time.
            <div class="button">Join Us</div>
            </div>
            <div>
                <img src={AccountImg} alt="A boy unlocking a phone image"></img>
            </div>
            </div>
            <img className="cover__img__six" src={coverImgSix} alt=""></img>
            <img className="cover__img__seven" src={coverImgSeven} alt=""></img>
        </div>
    );
};

export default Story;