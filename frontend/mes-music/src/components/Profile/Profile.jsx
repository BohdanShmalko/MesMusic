import React from 'react'
import s from './Profile.module.css'

export const Profile = (props) => {
    //delete in future
    const myId = 0;
    const currentPage = 0;
    /////////////////
    return <div className={s.profile}>
        <div className={s.photo}>
            <img src={props.userProfile.photo} alt="My Awesome Image" />
            {currentPage == myId && <div><button>Change main photo</button></div>}
            <img src={props.userProfile.photo} className={s.otherPhotos} />
            <img src={props.userProfile.photo} className={s.otherPhotos} />
            <img src={props.userProfile.photo} className={s.otherPhotos} />
            <span>see more</span>
        </div>

        <div className={s.nickName}><h1>{props.userProfile.nickName}</h1></div>

        <div className={s.status}><h2>{props.userProfile.status}</h2></div>

        <div className={s.info}>
            <h3>About me:</h3>
            <span>{props.userProfile.info}</span>
        </div>

        <div className={s.addPost}>
            <div className={s.headInf}><input placeholder="head"/></div>
            <div><textarea className={s.textarea} placeholder="post content"></textarea></div>
            <div className={s.pin}>pin : <button>music</button><button>photo</button><button>file</button></div>
            <div><button>Add post</button></div>
        </div>

        <div className={s.posts}>
            <h3>My posts</h3>
            {props.userProfile.posts.map((val, key) => (<div key={key}>
                    <img src={props.userProfile.photo} alt="My Awesome Image" />
                    <span><b>{val.header}</b></span>
                    <div>{val.info}</div>
            </div>
            ))}
        </div>
    </div>
}