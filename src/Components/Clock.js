import React from 'react';

function Clock({time}) {
    return (
        <>
            <div className="clock">
                <div className="hourHand" style = {{transform:`rotate`}}>
                    
                </div>
            </div>
            <p>{time}</p>
        </>
    );
}

export default Clock;