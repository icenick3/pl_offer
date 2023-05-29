import React from 'react';
import './FifthQuestion.css'
import {AnimatePresence, motion} from "framer-motion";
import UserCounter from "../../components/UserCounter/UserCounter";

const FifthQuestion = ({setCounter , randomNumber}) => {

    const onclick = () => {
        setCounter(6)
    }

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ x: -1000,  }}
                animate={{ x: 0,  }}
                exit={{ x: 1000,  }}
                transition={{ duration: 0.5 }}
            >
                <div id="first">
                    <h1>Quelle est la première chose que vous avez vue ?</h1>
                    <img src="https://i.pinimg.com/originals/95/c3/ca/95c3ca1712c7634d953edf146d621ef6.png" alt=""/>
                    <p onClick={()=> onclick()}>Loup</p>
                    <p onClick={()=> onclick()}>Papillon</p>
                    <p onClick={()=> onclick()}>Oiseau</p>
                    <p onClick={()=> onclick()}>Le chien</p>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default FifthQuestion;