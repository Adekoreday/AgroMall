import React from 'react';
import Card from '../Card'
import Cola from '../../assets/cola.svg';
import research from '../../assets/research.svg';
import newDeal from '../../assets/newdeal.svg';
import associations from '../../assets/association.svg';
import partners from '../../assets/partners.svg';
import settings from '../../assets/settings.svg';
import community from '../../assets/community.svg';
import tractor from '../../assets/tractor.svg';
import coverImgfour from '../../assets/coverImgfour.svg';
import coverImgfive from '../../assets/coverImgfive.svg';


import './index.css';


const CloserLook = () => {
    const data = [
        {
            title: "How It Works",
            img: settings,
            content: "AgroCola’s efficient and easy to use registration allows users to get onboard in a few easy steps."
        },
        {
            title: "Associations",
            img: associations,
            content: "The AgroCola Association is an independent, not-for -profit membership organisation..."
        },
        {
            title: "The New Deal",
            img: newDeal,
            content: "AgroCola will bring financial benefits to the young ones of Nigeria that participate in 5 poss..."
        },
        {
            title: "The Case For AgroCola",
            img: tractor,
            content: "We believe that if 2 million educated young farmers are engaged to cultivate 2 million..."
        },
        {
            title: "Community",
            img: community,
            content: "AgroCola is creating a vibrant collaborative community where young persons and other..."
        },
        {
            title: "Partners",
            img: partners,
            content: "Partnerships will support in several categories for the rapid development and deployment..."
        },
        {
            title: "Cola",
            img: Cola,
            content: "AgroCola will drive financial inclusion of the youth in agriculture and the rural economy"
        },
        {
            title: "Research and Knowledge",
            img: research,
            content: "The intersection of youth and digital technology holds the promise of unlocking exponential..."
        }
    ];
    return (
        <div className="closerlook__cover">
        <div className="closerlook__container">
            <h1 className='closer__title'>A Closer Look</h1>
            <img className="coverimage__four" src={coverImgfour}></img>
            <img className="coverimage__five" src={coverImgfive}></img>
            <div className='items__group'>
                {
                    data.map(item => 
                       <Card 
                        img={item.img}
                        title={item.title}
                        content={item.content}
                        ></Card>  
                    )
                }

            </div>
        </div>
        </div>
    );
};

export default CloserLook;