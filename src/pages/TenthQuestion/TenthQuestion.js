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
                <div id="second">
                    <h1>Choisissez la figure qui vous plaît le plus</h1>
                    <div className="imagesContainer">
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/46/f2/6b/46f26bfed375af6352155da5d7dc66e3.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/fc/83/b5/fc83b55a2e5a1387961c275f51966027.png" alt="" onClick={onclick}/>
                        </div>
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/71/89/1a/71891aee9843a56bb2b3265f5b45622d.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/1e/0b/eb/1e0beb849a0cc8542d016c7fb0599d1b.png" alt="" onClick={onclick}/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default TenthQuestion;