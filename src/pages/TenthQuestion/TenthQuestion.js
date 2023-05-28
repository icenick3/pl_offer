import React from 'react';
import './TenthQuestion.css'
import {AnimatePresence, motion} from "framer-motion";
import UserCounter from "../../components/UserCounter/UserCounter";

const TenthQuestion = ({setCounter, randomNumber}) => {
    const onclick = () => {
        setCounter(11)
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
                    <h1>Où aimez-vous vous reposer ?</h1>
                    <div className="imagesContainer">
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/ba/23/4e/ba234ebc5c3864687df323474a2258a5.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/e6/f1/6e/e6f16ec31a88b71a3c81f769d3e31226.png" alt="" onClick={onclick}/>
                        </div>
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/0f/c5/04/0fc50445608e893514333102033d9785.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/cc/e6/fc/cce6fc0ccac7d254c200fca4bba7ca74.png" alt="" onClick={onclick}/>

                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default TenthQuestion;