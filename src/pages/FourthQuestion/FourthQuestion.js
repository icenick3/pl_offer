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
                <div id="second">
                    <h1>Choisissez la couleur que vous préférez</h1>
                    <div className="imagesContainer">
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/15/02/35/150235295c815166182053739ef2807e.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/4c/0b/8c/4c0b8ca29d6d9841462630e7a36a1341.png" alt="" onClick={onclick}/>
                        </div>
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/b4/20/2d/b4202d316f3c7d922b9609ab61dbc4ab.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/b5/c9/83/b5c9832efc53fb5dcee945f9b3e9b714.png" alt="" onClick={onclick}/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default FourthQuestion;