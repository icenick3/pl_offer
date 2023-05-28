import React from 'react';
import './FourthQuestion.css'
import {AnimatePresence, motion} from "framer-motion";
import UserCounter from "../../components/UserCounter/UserCounter";
const FourthQuestion = ({setCounter, randomNumber}) => {

    const onclick = () => {
        setCounter(5)
    }

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ y: -500,  }}
                animate={{ y: 0,  }}
                exit={{ y: 100,  }}
                transition={{ duration: 0.5 }}
            >
                <div id="first">
                    <h1>Choisissez la figure qui vous plaît le plus</h1>
                    <div className="imagesContainer">
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/63/27/26/6327263e938f0d03a35b43ff6b9be140.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/0b/0e/6d/0b0e6db48202f4e1171ef5754e4dae18.png" alt="" onClick={onclick}/>
                        </div>
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/9f/33/d2/9f33d26f91486f21aeb33c8ad528f4ec.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/f5/64/05/f56405902a701cf8d6495ca4f09c92a2.png" alt="" onClick={onclick}/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default FourthQuestion;