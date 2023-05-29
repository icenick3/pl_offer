import React from 'react';
import './SeventhQuestion.css'
import {AnimatePresence, motion} from "framer-motion";
import UserCounter from "../../components/UserCounter/UserCounter";
const SeventhQuestion = ({setCounter, randomNumber}) => {

    const onclick = () => {
        setCounter(8)
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
                    <h1>Fermez les yeux pendant quelques secondes</h1>
                    <h2 className="h22Text">Ouvrez les yeux et choisissez <span>l'endroit qui vous attire le plus</span></h2>
                    <div className="imagesContainer">
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/a4/cc/07/a4cc07a43cca53f051acbce2c0331e92.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/b8/4f/f4/b84ff43de9ea510bd995ea428bc34ceb.png" alt="" onClick={onclick}/>
                        </div>
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/52/7d/53/527d531369f30ca9ea54681b7539b199.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/72/4f/d5/724fd5b10766e55009b039879a338055.png" alt="" onClick={onclick}/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};


export default SeventhQuestion;