import React, {useState, useEffect} from 'react';

function Clock({hour, minute, second}) {  
    return (
        <>
            <div className="clock">
                <div className="hourHand" style = {{transform:`rotate(${hour * 30 - 180}deg)`}}>
                    
                </div>
                <div className="minuteHand" style = {{transform:`rotate(${minute * 6 - 180}deg)`}}>
                    
                </div>
                <div className="secondHand" style = {{transform:`rotate(${second * 6 - 180}deg)`}}>
                    
                </div>
                <div className="center"></div>
            </div>
        </>
    );
}

export default Clock;