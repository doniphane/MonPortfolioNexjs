import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        
        <div className="about-me">
            <h2>À propos de moi</h2>
            <p>
                Hello ! Je m'appelle Doniphane Trules, développeur Web junior tout juste diplômé.
                Auparavant, j'ai effectué un BTS en électronique et communication, et j'ai fait une reconversion dans le développement Web, domaine qui m'intéresse depuis mon enfance.
                J'ai donc suivi la formation Développeur Web et web mobile au sein de l'Institut de Formation de la Réunion.
            </p>
            <div className="profile-container">
                <div className="profile-picture">
                    <img src={`${process.env.PUBLIC_URL}/2.jpg`} alt="Doniphane Trules" />
                </div>
                <div className="profile-info">
                    <h3>Trules Doniphane</h3>
                    <p>Âge : 23 ans</p>
                    <p>Ville : Plate St-Leu</p>
                    <p> Passion : Capture the flag " Hack the box"</p>
                    <p> Passion: Réparation Informatique</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
