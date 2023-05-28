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
                    <h1>Choisissez la couleur que vous préférez</h1>
                    <div className="imagesContainer">
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/57/d0/cc/57d0cc00e513faf125a8d412042f4705.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/74/9d/2a/749d2a750777c46de689340255398503.png" alt="" onClick={onclick}/>
                        </div>
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/f9/0f/0a/f90f0a035f99c10f0767a9bf39d8c5c4.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/cf/ee/33/cfee33cb92684855e3d030743d1849bf.png" alt="" onClick={onclick}/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>

    );
};

export default FirstQuestion;