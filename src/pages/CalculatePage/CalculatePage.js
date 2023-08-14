import React, {useEffect, useState} from 'react';
import './CalculatePage.css'
import {AnimatePresence, motion} from "framer-motion";
import {useTranslation} from "react-i18next";

const CalculatePage = ({setCounter}) => {

    const [progress, setProgress] = useState(0);
    const [active, setActive] = useState(false);

    useEffect(() => {
        let interval;

        const startTimer = () => {
            interval = setInterval(() => {
                setProgress((prevProgress) => {
                    const newProgress = prevProgress + 1;
                    let a = document.querySelector('#buttonOffer')
                    console.log(a.href)
                    if (newProgress >= 100) {
                        clearInterval(interval);
                    }
                    return newProgress;
                });
            }, 50);
        };

        if (!active) {
            startTimer();
        }

        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                    window.location.href = document.querySelector('#buttonOffer').href
            }, 1500)
        }

        return () => {
            clearInterval(interval);
        };
    }, [progress, active]);

    const {t} = useTranslation()

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{y: -2000,}}
                animate={{y: 0,}}
                exit={{x: 600,}}
                transition={{duration: 0.2}}
            >
                <div id="Page12">
                    <div className="circle">
                        {progress}%
                    </div>
                    <div className="results">
                        <p>
                            <img src="https://i.pinimg.com/originals/c0/40/d2/c040d230f8c06d0272674651048952a7.png"
                                 alt=""/>
                            {t("check1")}
                        </p>
                        {progress > 53 && <p>
                            <img src="https://i.pinimg.com/originals/c0/40/d2/c040d230f8c06d0272674651048952a7.png"
                                 alt=""/>
                            {t("check2")}
                        </p>}
                        {progress > 75 && <p>
                            <img src="https://i.pinimg.com/originals/c0/40/d2/c040d230f8c06d0272674651048952a7.png"
                                 alt=""/>
                            {t("check3")}
                        </p>}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default CalculatePage;