import React from 'react'
import s from './Profile.module.css'

export const Profile = (props) => {
    return <div className={s.profile}>
        <div className={s.photo}><img src={props.userProfile.photo} alt="My Awesome Image" /></div>

        <div className={s.nickName}><h1>{props.userProfile.nickName}</h1></div>

        <div className={s.status}><h2>{props.userProfile.status}</h2></div>

        <div className={s.info}>
            <h3>About me:</h3>
            <span>{props.userProfile.info}</span>
        </div>

        <div className={s.addPost}>
            <textarea></textarea>
            <button>Add post</button>
        </div>

        <div className={s.posts}>
            {props.userProfile.posts.map((val, key) => (<div key={key}>
                    <img src={props.userProfile.photo} alt="My Awesome Image" />
                    <span>{val}</span>
            </div>
            ))}
        </div>
    </div>
}