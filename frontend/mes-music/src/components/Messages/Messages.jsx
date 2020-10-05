import React from 'react'
import s from './Messages.module.css'

export const Messages = (props) => {
    return <div className={s.messages}>
        <div className={s.users}>
            {(() => {
                    let array = [];
                    for (let key in props.messages) {
                        array.push(<div key={key} className={key == props.watchId ? s.active : 0}>
                            <img src={props.messages[key].main.photo} alt="My Awesome Image"/>
                            <span>{props.messages[key].main.name}</span>
                        </div>)
                    }
                    return array
                })()}
        </div>
        <div className={s.messageItems}>
            {props.messages[props.watchId].messages.map((val, key) => (<div key={key}  className={s.messageItem}>
                    <img src={props.messages[props.watchId].peoples[val.who].photo} alt="My Awesome Image"/>
                    <span>{props.messages[props.watchId].peoples[val.who].nickName}</span>
                    <span>{val.message}</span>
                    <span>{val.time}</span>
                </div>
            ))}
        </div>
    </div>
}