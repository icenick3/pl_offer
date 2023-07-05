import React, {useEffect, useRef, useState} from 'react';
import './TenthQuestion.css'
import {AnimatePresence, motion} from "framer-motion";
import UserCounter from "../../components/UserCounter/UserCounter";
import {useTranslation} from "react-i18next";

const TenthQuestion = ({setCounter, randomNumber}) => {

    const [inputText, setText] = useState(null)

    const {t} = useTranslation()
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{y: -1000}}
                animate={{y: 0,}}
                exit={{y: 1000,}}
                transition={{duration: 0.5}}
            >
                <div className="question">
                    <h1>{t("legs")}</h1>
                    <img src="https://i.pinimg.com/originals/2c/c1/f7/2cc1f705ad4a2523772155a80bc7a880.png" alt=""/>
                    <p>{t("input")}</p>
                    <input type="text"  onChange={(e)=>setText(e.target.value)}/>
                    <button className="button2" id={inputText ? "" : "gray"} onClick={() => {
                        if (inputText) {
                            setCounter(11)
                        }
                    }}>{t("next")}</button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default TenthQuestion;