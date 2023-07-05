import React from 'react';
import './TitlePage.css'
import {useTranslation} from "react-i18next";


const TitlePage = ({setCounter}) => {

    const {t} = useTranslation()


    return (
        <div id="gorilla_page">

            <h1 className="gorilla_page-title">{t("title")}</h1>
            <p className="gorilla_page-text">{t("title_text")}</p>
                <img src="https://i.pinimg.com/originals/ef/ef/de/efefdef133b7f3339c2d4150ccec7b0b.png" alt=""/>
            <button className="gorilla_page-btn" onClick={()=> setCounter(1)}>{t("start")}</button>
        </div>);
};

export default TitlePage;