import React, {useState} from 'react'
import s from './Dialogs.module.css'
import cn from 'classnames'
import {MessageList} from './MessageList/MessageList'
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/Auth";
import {Button} from "antd";

export const Dialogs = compose(withAuthRedirect)(({
                                                      watchId, userId, messages, onDialogClick, onAddMessageClick
                                                  }) => {
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

    return <div className={s.messagePage}>
        <div className={s.usersList}>
            {usersList}
        </div>
        <div className={s.messageItems}>
            <MessageList messages={messages} userId={userId} watchId={watchId}/>
            <div className={s.addMessageBox}>
                <textarea onChange={(e) => changeMessageText(e.target.value)}
                          value={messageText} style={{width: '80%'}}/>
                <Button className={s.addMessage} onClick={() => {
                    onAddMessageClick(messageText)
                    changeMessageText('')
                }} style={{width: '20%'}}>Add message
                </Button>
            </div>
        </div>
    </div>
})