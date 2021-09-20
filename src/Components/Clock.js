import React, {useState, useEffect} from 'react';

function Clock({hour, minute, second}) {  

    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <>
            <div className="clock">
                <div className="hourHand" style = {{transform:`rotate(${hour * 30 - 180 + (minute/60)*30}deg)`}}>
                    
                </div>
                <div className="minuteHand" style = {{transform:`rotate(${minute * 6 - 180}deg)`}}>
                    
                </div>
                <div className="secondHand" style = {{transform:`rotate(${second * 6 - 180}deg)`}}>
                    
                </div>
                <div className="center"></div>
                {nums.map((x) => {
                    return(
                        <div className="clockNumber" style={{transform:`rotate(${x * 30 - 180}deg)`}}>
                            <h5 className="clockText" style={{transform:`rotate(${180 - x*30}deg)`}}>{x}</h5>
                            <h5 className="clockSign">I</h5>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Clock;