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
                <div id="first">
                    <h1>Choisissez le fruit que vous préférez parmi les suivants :</h1>
                    <div className="imagesContainer">
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/29/c3/ad/29c3ad5baee4e05baad0654f4f84cb0c.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/ac/23/c3/ac23c30623642b841cd51b17861ed209.png" alt="" onClick={onclick}/>
                        </div>
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/1a/d9/bb/1ad9bb578f8adf665c6b5461c6c87b61.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/e5/f1/73/e5f17311dbbd5a5fed5868c89dcfe4ea.png" alt="" onClick={onclick}/>
                        </div>
                    </div>
                </div>

            </motion.div>
        </AnimatePresence>
    );
};

export default EighthQuestion;