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
                <div id="second">
                    <h1>Quelle est la rose que vous préférez ?</h1>
                    <div className="imagesContainer">
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/0b/b1/56/0bb15647d6d9aa3adb5fb09369c2ea28.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/3d/81/74/3d8174bdaa133f1320f1d2fa15aa426f.png" alt="" onClick={onclick}/>
                        </div>
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/03/ce/dc/03cedceb1622550a0f76d7f4bb45991e.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/b8/c8/ef/b8c8efb90c1a267aab3a65d8b98937f7.png" alt="" onClick={onclick}/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default SixthQuestion;