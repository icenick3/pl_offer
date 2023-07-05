import React, {useEffect, useRef, useState} from 'react';
import './NinthQuestion.css'
import {AnimatePresence, motion} from "framer-motion";
import UserCounter from "../../components/UserCounter/UserCounter";
import {useTranslation} from "react-i18next";

const NinthQuestion = ({setCounter, randomNumber}) => {
    const [curref, setCurRef] = useState(null)

    useEffect(() => {
        if (curref) {
            refs.map(ref => {
                if (ref.current === curref.current) {
                    ref.current.id = "divCheck"
                    ref.current.children[0].children[0].children[0].classList.add('imgCheck')
                    ref.current.children[1].id = 'opaci'

                } else {
                    ref.current.id = ""
                    ref.current.children[0].children[0].children[0].classList.remove('imgCheck')
                    ref.current.children[1].id = ''
                }


            })
        }
    }, [curref])


    const refs = [
        useRef(),
        useRef(),
        useRef(),
    ]
    const onclick = () => {
        setCounter(2)
    }
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
                    <div className="imageBox9"></div>
                    <h1>{t("mind")}</h1>
                    <div ref={refs[0]} className="answer" onClick={() => setCurRef(refs[0])}>
                        <div className="checkBox">
                            <div>
                                <img
                                    src="https://i.pinimg.com/originals/d4/e8/d0/d4e8d08beffc3aefb0f7bb820bbc435f.png"
                                    alt=""/>
                            </div>
                        </div>
                        <div className="ansText">
                            {t("ans33")}
                        </div>
                    </div>
                    <div ref={refs[1]} className="answer" onClick={() => setCurRef(refs[1])}>
                        <div className="checkBox">
                            <div>
                                <img src="https://i.pinimg.com/originals/d4/e8/d0/d4e8d08beffc3aefb0f7bb820bbc435f.png"
                                     alt=""/>
                            </div>
                        </div>
                        <div className="ansText">
                            {t("ans34")}
                        </div>
                    </div>
                    <div ref={refs[2]} className="answer" onClick={() => setCurRef(refs[2])}>
                        <div className="checkBox">
                            <div>
                                <img src="https://i.pinimg.com/originals/d4/e8/d0/d4e8d08beffc3aefb0f7bb820bbc435f.png"
                                     alt=""/>
                            </div>
                        </div>
                        <div className="ansText">
                            {t("ans35")}
                        </div>
                    </div>
                    <button onClick={()=> setCounter(10)}>{t("next")}</button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default NinthQuestion;