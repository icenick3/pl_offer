import React from 'react';
import './EighthQuestion.css'
import {AnimatePresence, motion} from "framer-motion";
import UserCounter from "../../components/UserCounter/UserCounter";
const EighthQuestion = ({setCounter, randomNumber}) => {

    const onclick = () => {
        setCounter(9)
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
                    <h1>Quel type de nourriture préférez-vous ?</h1>
                    <div className="imagesContainer">
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/a6/ca/22/a6ca229ac279ef2af4ecc2fffa2de2fa.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/d9/c3/1a/d9c31af1df73de6c2165b717ec7130b0.png" alt="" onClick={onclick}/>
                        </div>
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/a3/a5/45/a3a5457bca082fd7ffbc1aabda6c5756.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/3d/a3/0d/3da30d6d57a85dd38d743802289fdef2.png" alt="" onClick={onclick}/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default EighthQuestion;