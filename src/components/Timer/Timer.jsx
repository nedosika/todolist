import React from 'react';

const Timer = () => {
    const [time, setTime] = React.useState((new Date()).toString());

    React.useEffect(() => {
        const interval = setInterval(() => setTime((new Date()).toString()), 1000);
        return () => clearInterval(interval);
    });

    return <span>{time}</span>
}

export default Timer;