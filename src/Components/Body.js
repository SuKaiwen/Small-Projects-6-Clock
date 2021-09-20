import React, {useState, useEffect} from 'react';
import Clock from './Clock';

function Body() {

    const [time, setTime] = useState("10:10:10 AM");
    const [second, setSecond] = useState();
    const [minute, setMinute] = useState();
    const [hour, setHour] = useState();

    useEffect(() => {
        console.log(new Date().toLocaleTimeString().split(" ")[0].split(":")[0])
        setInterval(() => getTime(), 1000);
    });

    const getTime = () => {
        var currTime = new Date().toLocaleTimeString();
        var currHour = currTime.split(" ")[0].split(":")[0];
        var currMinute = currTime.split(" ")[0].split(":")[1];
        var currSecond = currTime.split(" ")[0].split(":")[2];
        setTime(currTime);
        setHour(currHour);
        setMinute(currMinute);
        setSecond(currSecond);
    }

    return (
        <div className="container">
            <p>Current time is: {time}</p>
            <Clock
                hour={hour}
                minute={minute}
                second={second}
            />
        </div>
    );
}

export default Body;