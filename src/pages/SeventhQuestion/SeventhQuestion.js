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
                <div id="first">
                    <h1>Quels animaux domestiques préférez-vous ?</h1>
                    <div className="imagesContainer">
                        <div className="images">
                                <img src="https://i.pinimg.com/originals/7a/a9/8b/7aa98bfb32c833a1803fc9559142d826.png" alt="" onClick={onclick}/>
                                <img src="https://i.pinimg.com/originals/83/05/b4/8305b4714f6bad828dfce8410b8a92d0.png" alt="" onClick={onclick}/>
                        </div>
                        <div className="images">
                                <img src="https://i.pinimg.com/originals/ec/6b/e8/ec6be8420d7bcb60921f537aff6e05c2.png" alt="" onClick={onclick}/>
                                <img src="https://i.pinimg.com/originals/cf/67/9a/cf679a9ea320ce97f10274917acd5661.png" alt="" onClick={onclick}/>

                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};


export default SeventhQuestion;