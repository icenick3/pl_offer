import React, {useEffect, useRef, useState} from 'react';
import './SeventhQuestion.css'
import {AnimatePresence, motion} from "framer-motion";
import UserCounter from "../../components/UserCounter/UserCounter";
import {useTranslation} from "react-i18next";
const SeventhQuestion = ({setCounter, randomNumber}) => {
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
                    <img src="https://i.pinimg.com/originals/cb/90/b3/cb90b35acb4e95f43b2a96075111e648.png" alt=""/>
                    <p>{t("input")}</p>
                    <input type="text"  onChange={(e)=>setText(e.target.value)}/>
                    <button className="button2" id={inputText ? "" : "gray"} onClick={() => {
                        if (inputText) {
                            setCounter(8)
                        }
                    }}>{t("next")}</button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};


export default SeventhQuestion;