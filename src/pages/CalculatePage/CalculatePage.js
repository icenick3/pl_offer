import React, {useEffect, useState} from 'react';
import './CalculatePage.css'
import {AnimatePresence, motion} from "framer-motion";

const CalculatePage = ({setCounter}) => {

    const [progress, setProgress] = useState(0);
    const [active, setActive] = useState(false);

    const newPath = document.querySelector('#buttonOffer').href



    useEffect(() => {
        let interval;

        const startTimer = () => {
            interval = setInterval(() => {
                setProgress((prevProgress) => {
                    const newProgress = prevProgress + 1;
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

        if (progress === 100){
            clearInterval(interval);
            setTimeout(()=>{
                window.location.href = newPath
            },1500)
        }

        return () => {
            clearInterval(interval);
        };
    }, [progress, active]);

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
                            <img src="https://i.pinimg.com/originals/e7/48/33/e748337036df38c352ec9e2db78f1864.png" alt=""/>
                            Analyse des réponses
                        </p>
                        {progress > 53 && <p>
                            <img src="https://i.pinimg.com/originals/e7/48/33/e748337036df38c352ec9e2db78f1864.png" alt=""/>
                            Identification des traumatismes psychologiques de l'enfance
                        </p>}
                        {progress > 75 && <p>
                            <img src="https://i.pinimg.com/originals/e7/48/33/e748337036df38c352ec9e2db78f1864.png" alt=""/>
                            Vérification de l'exactitude du résultat
                        </p>}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default CalculatePage;