import React from 'react';
import './FirstQuestion.css'
import {AnimatePresence, motion} from 'framer-motion';
import UserCounter from "../../components/UserCounter/UserCounter";

const FirstQuestion = ({setCounter, randomNumber}) => {


    const onclick = () => {
        setCounter(2)
    }

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ x: -1000 }}
                animate={{ x: 0, }}
                exit={{ x: 1000, }}
                transition={{ duration: 0.5 }}
            >
                <div id="first">
                    <h1>Fermez les yeux pendant quelques secondes</h1>
                    <img src="https://i.pinimg.com/originals/70/63/1d/70631ddb8bbccc1964261244ea527a5f.png" alt=""/>
                    <p onClick={()=> onclick()}>A.</p>
                    <p onClick={()=> onclick()}>B.</p>
                    <p onClick={()=> onclick()}>C.</p>
                </div>
            </motion.div>
        </AnimatePresence>

    );
};

export default FirstQuestion;