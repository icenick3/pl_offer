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
                    <h1>Choisissez le genre de musique que vous préférez parmi les suivants :</h1>
                 <div>
                     <p onClick={onclick}>Pop</p>
                     <p onClick={onclick}>Rock</p>
                     <p onClick={onclick}>Hip-Hop / Rap</p>
                     <p onClick={onclick}>Dance / Electronic / House</p>
                 </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default SecondQuestion;