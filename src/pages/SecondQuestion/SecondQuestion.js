import React from 'react';
import './SecondQuestion.css'

import {AnimatePresence, motion} from "framer-motion";
import UserCounter from "../../components/UserCounter/UserCounter";
const SecondQuestion = ({setCounter, randomNumber}) => {


    const onclick = () => {
        setCounter(3)
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
                    <h1>Choisissez le fruit que vous préférez parmi les suivants :</h1>
                    <div className="imagesContainer">
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/88/38/af/8838af0bdbc6ffc9afa188858d86a401.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/41/46/9b/41469b9e3511da49e6c443ae448ddf92.png" alt="" onClick={onclick}/>
                        </div>
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/98/8d/30/988d3099197c4ac5e8c2fa86f2056056.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/03/f0/e2/03f0e295cb8d9485656fe4a395154e53.png" alt="" onClick={onclick}/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default SecondQuestion;