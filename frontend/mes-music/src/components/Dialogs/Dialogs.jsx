import React from 'react'
import s from './Dialogs.module.css'

export const Dialogs = (props) => {
    //delete in future
    const myId = 0;
    /////////////////
    return <div className={s.messages}>
        <div className={s.users}>
            {(() => {
                    let array = [];
                    for (let key in props.messages) {
                        array.push(<div key={key} className={key == props.watchId ? s.active : 0}>
                            <div><img src={props.messages[key].main.photo} alt="My Awesome Image"/></div>
                            <span>{props.messages[key].main.name}</span>
                        </div>)
                    }
                    return array
                })()}
        </div>
        <div className={s.messageItems}>
            {props.messages[props.watchId].messages.map((val, key) => (
                <div key={key}>
                    {val.who == myId && <div className={s.myMessage}>
                            <span>{val.time}</span>
                            <span><img src={props.messages[props.watchId].peoples[val.who].photo} alt="My Awesome Image"/></span>
                            <span>{val.message}</span></div>
                    }
                    {val.who != myId && <div className={s.whosMessage}>
                        <span><img src={props.messages[props.watchId].peoples[val.who].photo} alt="My Awesome Image"/></span>
                        <span>{val.message}</span>
                        <span></span>
                        <span>{val.time}</span></div>
                    }

                </div>
            ))}
        </div>
    </div>
}