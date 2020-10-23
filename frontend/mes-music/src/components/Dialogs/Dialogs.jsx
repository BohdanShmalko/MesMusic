import React, {useState} from 'react'
import s from './Dialogs.module.css'

export const Dialogs = ({watchId, userId, messages, onDialogClick, onAddMessageClick}) => {
    const [messageText, changeMessageText] = useState('')

    return <div className={s.messages}>
        <div className={s.users}>
            {(() => {
                let array = [];
                for (let key in messages) {
                    array.push(<div onClick={() => onDialogClick(key)} key={key}
                                    className={key === watchId ? s.active : 0}>
                            <div><img src={messages[key].main.photo} alt="My Awesome Image"/></div>
                            <span>{messages[key].main.name}</span>
                        </div>)
                }
                return array
            })()}
        </div>
        <div className={s.messageItems}>
            {messages[watchId].messages.map((val, key) => (
                <div key={key}>
                    {val.who === userId && <div className={s.message}>
                        <div className={s.myMessage}>
                            <span><img src={messages[watchId].peoples[val.who].photo} alt="My Awesome Image"/></span>
                            <span>{val.message}</span>
                        </div>
                        <span className={s.time}>{val.time}</span>
                    </div>
                    }
                    {val.who !== userId && <div className={s.message}>
                        <div className={s.whosMessage}>
                            <span><img src={messages[watchId].peoples[val.who].photo} alt="My Awesome Image"/></span>
                            <span>{val.message}</span>
                        </div>
                        <span className={s.time}>{val.time}</span>
                    </div>
                    }
                </div>
            ))}
        </div>
        <div>
            <textarea onChange={(e) => changeMessageText(e.target.value)}
                      value={messageText}/>
            <button className={s.addMessage} onClick={() => {
                onAddMessageClick(messageText)
                changeMessageText('')
            }}>Add message
            </button>
        </div>
    </div>
}