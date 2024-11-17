import { useState, useEffect } from "react";
import styles from './Stoper.module.scss'
import RenderTime from "../RenderTime/RenderTime";

const Stoper = () => {

    const [time, setTime] = useState(0);
    const [timerId, setTimerId] = useState(null);

    

    const start = () => {
        if(!timerId) {
            const id = setInterval(() => {
                setTime(prevValue => prevValue + 100);  
            }, 100);
            setTimerId(id);
        }  
    };

    const stop = () => {
        if(timerId) {
            clearInterval(timerId);
            setTimerId(null);
        }
    }

    const reset = () => {
            setTime(0);
    }

    useEffect(() => {
        return () => {
            if(timerId) clearInterval(timerId)
        };
    }, [timerId]);


    return (
        <div className={styles.container}>
            <div className={styles.stoper}><RenderTime time={time} /></div>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={start}>Start</button>
                <button className={styles.button} onClick={stop}>Stop</button>
                <button className={styles.button} onClick={reset} >Reset</button>
            </div>
        </div>
    )
}

export default Stoper;