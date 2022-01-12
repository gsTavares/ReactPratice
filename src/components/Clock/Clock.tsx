import { time } from "console";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Clock() {

    const[timer, setTimer] = useState(
        {time: ''}
    );

    useEffect(() => {
        function tick(){
            timer.time = new Date().toLocaleString();
            const element = <p>{timer.time}</p>
            ReactDOM.render(element, document.getElementById('relogio'));
        }
        setInterval(tick, 1000);
    }, [timer.time])

    return(
        <div id="relogio" className="text-end"></div>
    );
}

export default Clock;