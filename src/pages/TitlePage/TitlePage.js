import React from 'react';
import './TitlePage.css'
import {useTranslation} from "react-i18next";


const TitlePage = ({setCounter}) => {

    const {t} = useTranslation()


    return (
        <div id="gorilla_page">
            <section></section>
            <h1 className="gorilla_page-title">{t("title")}</h1>
            <p className="gorilla_page-text">{t("title_text")}</p>
            <button className="gorilla_page-btn" onClick={()=> setCounter(1)}>{t("start")}</button>
            <hr/>
            <h3>{t("text1")}</h3>
            <p className="gorilla_page-text2">{t("text2")}</p>
            <br/>
            <p className="gorilla_page-text2">{t("text3")}</p>
            <h4>{t("text4")}</h4>
            <h4>{t("text5")}</h4>
            <p className="gorilla_page-text2">{t("text6")}</p>
            <br/>
            <p className="gorilla_page-text2">{t("text7")}</p>
            <button className="gorilla_page-btn" onClick={()=> setCounter(1)}>{t("start")}</button>
        </div>);
};

export default TitlePage;