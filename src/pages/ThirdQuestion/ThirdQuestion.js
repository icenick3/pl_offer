import React from 'react';
import './ThirdQuestion.css'
import {AnimatePresence, motion} from "framer-motion";
import UserCounter from "../../components/UserCounter/UserCounter";
const ThirdQuestion = ({setCounter, randomNumber}) => {

    const onclick = () => {
        setCounter(4)
    }

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ x: -1000,  }}
                animate={{ x: 0, }}
                exit={{ x: 1000,  }}
                transition={{ duration: 0.5 }}
            >
                <div id="first">
                    <h1>Quel type de nourriture préférez-vous ?</h1>
                    <div className="imagesContainer">
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/a2/8d/2c/a28d2c1940d7ce9c33ad95df80add2e5.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/bd/e2/03/bde2033b2f9222cff64f00b071e02e58.png" alt="" onClick={onclick}/>
                        </div>
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/69/5e/44/695e44b1f60c349607e47b48438eae75.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/5d/96/40/5d9640fd05017e936415f7c402dc9087.png" alt="" onClick={onclick}/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ThirdQuestion;