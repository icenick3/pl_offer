import React from 'react';
import './FifthQuestion.css'
import {AnimatePresence, motion} from "framer-motion";
import UserCounter from "../../components/UserCounter/UserCounter";

const FifthQuestion = ({setCounter , randomNumber}) => {

    const onclick = () => {
        setCounter(6)
    }

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ x: -1000,  }}
                animate={{ x: 0,  }}
                exit={{ x: 1000,  }}
                transition={{ duration: 0.5 }}
            >
                <div id="first">
                    <h1>Selon vous, qu'est-ce qui est superflu ici ?</h1>
                    <div className="imagesContainer">
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/11/76/94/1176946902909738f106f2a73159ec48.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/e3/16/a4/e316a487db9fc79be5d56b154b7022fb.png" alt="" onClick={onclick}/>
                        </div>
                        <div className="images">
                            <img src="https://i.pinimg.com/originals/17/b8/9f/17b89f685f3be3bad6814b0ebd433b35.png" alt="" onClick={onclick}/>
                            <img src="https://i.pinimg.com/originals/54/f1/65/54f165dcb6389afcd48202b22a38503d.png" alt="" onClick={onclick}/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default FifthQuestion;