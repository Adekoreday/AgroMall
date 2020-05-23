import React from 'react';
import MissionImg from '../../assets/mission.svg'
import './index.css';

const Mission = () => {
    return (
        <div className="mission__section">
            <img className="mission__img" src={MissionImg} ></img>
        </div>
    );
};

export default Mission;