import React from 'react';
import './SixthQuestion.css'
import {AnimatePresence, motion} from "framer-motion";
import UserCounter from "../../components/UserCounter/UserCounter";

const SixthQuestion = ({setCounter , randomNumber}) => {
    const onclick = () => {
        setCounter(7)
    }

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ y: -1000,  }}
                animate={{ y: 0,  }}
                exit={{ y: 1000,  }}
                transition={{ duration: 0.5 }}
            >
                <div id="first">
                    <h1>Quel type de transport préférez-vous ?</h1>
                    <div className="imagesContainer">
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/e6/d8/36/e6d83608e2fef25e8ef5113819550dcf.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/80/ba/bf/80babfadc59e7a51612342f7e0492a63.png" alt="" onClick={onclick}/>
                        </div>
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/80/70/e2/8070e21d22fe5ea637d20087024d0695.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/9f/cc/a3/9fcca34c72f6e75cc62fbf4470d55afb.png" alt="" onClick={onclick}/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default SixthQuestion;