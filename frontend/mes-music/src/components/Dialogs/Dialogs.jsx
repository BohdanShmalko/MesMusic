import React, {useState} from 'react'
import s from './Dialogs.module.css'
import cn from 'classnames'

export const Dialogs = ({watchId, userId, messages, onDialogClick, onAddMessageClick}) => {
    const [messageText, changeMessageText] = useState('')

    const usersList = (() => {
        let array = []
        for (let key in messages) {
            array.push(<div onClick={() => onDialogClick(key)} key={key}
                            className={cn(s.usersListItem, {[s.active]: key == watchId})}>
                <img src={messages[key].main.photo} alt="!"/>
                <span>{messages[key].main.name}</span>
            </div>)
        }
        return array
    })()

    const messageItems = messages[watchId].messages.map((val, key) => (
        <div key={key} className={s.message}>
                <div className={val.who === userId ? s.myMessage : s.whoseMessage}>
                    <img src={messages[watchId].peoples[val.who].photo} alt="!"/>
                    <span>{val.message}</span>
                </div>
                <span className={s.time}>{val.time}</span>
        </div>
    ))

    return <div className={s.messagePage}>
        <div className={s.usersList}>
            {usersList}
        </div>
        <div className={s.messageItems}>
            <div className={s.messageList}>
                {messageItems}
            </div>
            <div className={s.addMessageBox}>
                <textarea onChange={(e) => changeMessageText(e.target.value)}
                          value={messageText}/>
                <button className={s.addMessage} onClick={() => {
                    onAddMessageClick(messageText)
                    changeMessageText('')
                }}>Add message
                </button>
            </div>
        </div>
    </div>
}