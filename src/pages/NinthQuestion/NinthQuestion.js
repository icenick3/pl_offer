import React from 'react';
import './NinthQuestion.css'
import {AnimatePresence, motion} from "framer-motion";
import UserCounter from "../../components/UserCounter/UserCounter";

const NinthQuestion = ({setCounter, randomNumber}) => {
    const onclick = () => {
        setCounter(10)
    }

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ y: -1000,  }}
                animate={{ y: 0,  }}
                exit={{ y: 100,  }}
                transition={{ duration: 0.5 }}
            >
                <div id="second">
                    <h1>Quels animaux domestiques préférez-vous ?</h1>
                    <div className="imagesContainer">
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/4f/5d/f4/4f5df4d404dbab8516970fd299c848ed.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/33/1d/00/331d00edf0502989173d79335073d043.png" alt="" onClick={onclick}/>
                        </div>
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/ea/5a/ab/ea5aab97a447c9d20cb4e6b2dce6fa7b.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/1b/68/fc/1b68fc58b713c59481e0b179e66a86cc.png" alt="" onClick={onclick}/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default NinthQuestion;