import React, {useEffect, useState} from 'react';
import './TitlePage.css'
import axios from "axios";

const TitlePage = ({setCounter}) => {


    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    const isPC = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);


    return (<div id="title_page">
        <h1>Découvrez ce que vos préférences révèlent de vous</h1>
        <br/>
        <p id="title_text"> Répondez à 10 questions pour découvrir quel type de traumatisme psychologique vous empêche de vivre pleinement votre vie.</p>
        <br/>
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id="gooey">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                    <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                    <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
                </filter>
            </defs>
        </svg>
        <a className="animated-button1" onClick={() => setCounter(1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            PASSER LE TEST
        </a>
    </div>);
};

export default TitlePage;