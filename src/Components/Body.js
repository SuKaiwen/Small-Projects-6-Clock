import React, {useState, useEffect} from 'react';
import Clock from './Clock';

function Body() {

    const [time, setTime] = useState();

    useEffect(() => {
        setInterval(() => getTime(), 1000);
    });

    const getTime = () => {
        var currTime = new Date().toLocaleTimeString();
        setTime(currTime);
    }

    return (
        <div className="container">
            <p>Current time is: {time}</p>
            <Clock time = {time} />
        </div>
    );
}

export default Body;