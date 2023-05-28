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
                    <h1>Choisissez le genre de film que vous préférez parmi les suivants :</h1>
                    <div>
                        <p onClick={onclick}>Science-fiction</p>
                        <p onClick={onclick}>Comédies</p>
                        <p onClick={onclick}>Horreur / Thriller</p>
                        <p onClick={onclick}>Documentaires / Historiques</p>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default NinthQuestion;