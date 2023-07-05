import React, {useEffect, useRef, useState} from 'react';
import './FirstQuestion.css'
import {AnimatePresence, motion} from 'framer-motion';
import {useTranslation} from "react-i18next";

const FirstQuestion = ({setCounter, randomNumber}) => {

    const [curref, setCurRef] = useState(null)
    const [hasId, setHasId] = useState(false)

    useEffect(() => {
        if (curref) {
            refs.map(ref => {
                if (ref.current.id !== "divCheck") {
                    if (ref.current === curref.current) {
                        ref.current.id = "divCheck"
                        ref.current.children[0].children[0].children[0].classList.add('imgCheck')
                        ref.current.children[1].id = 'opaci'
                    }
                } else {

                    if (ref.current === curref.current) {
                        ref.current.id = ""
                        ref.current.children[0].children[0].children[0].classList.remove('imgCheck')
                        ref.current.children[1].id = ''
                    }
                }
            })

            if (refs[0].current.id === "" && refs[1].current.id === "" && refs[2].current.id === "" && refs[3].current.id === ""){
                setHasId(false)
            } else setHasId(true)

        }
    }, [curref])


    const refs = [
        useRef(),
        useRef(),
        useRef(),
        useRef()
    ]

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
                    <h1>{t("years")}</h1>
                    <img className="firstImage" src="https://i.pinimg.com/originals/06/e7/ff/06e7ff12388e91e64b6c85b12bcf4989.png" alt=""/>
                    <div ref={refs[0]} className="answer" onClick={() => setCurRef({...refs[0]})}>
                        <div className="checkBox">
                            <div>
                                <img
                                    src="https://i.pinimg.com/originals/d4/e8/d0/d4e8d08beffc3aefb0f7bb820bbc435f.png"
                                    alt=""/>
                            </div>
                        </div>
                        <div className="ansText">
                            {t("ans1")}
                        </div>
                    </div>
                    <div ref={refs[1]} className="answer" onClick={() => setCurRef({...refs[1]})}>
                        <div className="checkBox">
                            <div>
                                <img
                                    src="https://i.pinimg.com/originals/d4/e8/d0/d4e8d08beffc3aefb0f7bb820bbc435f.png"
                                    alt=""/>
                            </div>
                        </div>
                        <div className="ansText">
                            {t("ans2")}
                        </div>
                    </div>
                    <div ref={refs[2]} className="answer" onClick={() => setCurRef({...refs[2]})}>
                        <div className="checkBox">
                            <div>
                                <img
                                    src="https://i.pinimg.com/originals/d4/e8/d0/d4e8d08beffc3aefb0f7bb820bbc435f.png"
                                    alt=""/>
                            </div>
                        </div>
                        <div className="ansText">
                            {t("ans3")}
                        </div>
                    </div>
                    <div ref={refs[3]} className="answer" onClick={() => setCurRef({...refs[3]})}>
                        <div className="checkBox">
                            <div>
                                <img
                                    src="https://i.pinimg.com/originals/d4/e8/d0/d4e8d08beffc3aefb0f7bb820bbc435f.png"
                                    alt=""/>
                            </div>
                        </div>
                        <div className="ansText">
                            {t("ans4")}
                        </div>
                    </div>
                    <button id={hasId ? "" : "gray"} onClick={() => {
                        if (hasId) {
                            setCounter(2)
                        }
                    }}>{t("next")}</button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default FirstQuestion;