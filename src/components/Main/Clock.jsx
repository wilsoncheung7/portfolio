import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [date, setDate] = useState(0);
    const tick = () => {
        setDate(new Date());
    }
    useEffect(() => {
        const interval = setInterval(() => {
            tick()
        }, 1000);
        return () => clearInterval(interval);

    }, [])
    // const times=new Date();
    return (
        <div>
            <h2 style={{ color: 'white', fontSize: '3rem' }}>{date.toLocaleString()}</h2>
        </div>
    )
}

export default Clock;