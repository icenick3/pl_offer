import React, {useEffect, useState} from 'react';
import './UserCounter.css'

const UserCounter = ({randomNumber}) => {




    return (
        <div id="counter1">
            <p id="text">Sur le site</p>
            <p id="number">{randomNumber}</p>
        </div>
    );
};

export default UserCounter;