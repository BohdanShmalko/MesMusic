import React from 'react'
import s from './Profile.module.css'
import {SidePhotoBar} from './SidePhotoBar/SidePhotoBar'

export const Profile = ({mainPhoto, photos, nickName, status, info, posts, isOwn}) => {
    return <div className={s.profile}>
        <div className={s.mainPhoto}>
            <img src={mainPhoto} alt="!"/>
            {isOwn && <div><button>Change main photo</button></div>}
        </div>

        <SidePhotoBar photos={photos}/>

        <div className={s.nickName}><h1>{nickName}</h1></div>

        <div className={s.status}><h2>{status}</h2></div>

        <div className={s.info}>
            <h3>About me:</h3>
            <span>{info}</span>
        </div>

        <div className={s.addPost}>
            <div className={s.headInf}><input placeholder="head"/></div>
            <div><textarea className={s.textarea} placeholder="post content"></textarea></div>
            <div className={s.pin}>pin : <button>music</button><button>photo</button><button>file</button></div>
            <div><button>Add post</button></div>
        </div>

        <div className={s.posts}>
            <h3>My posts</h3>
            {posts.map((val, key) => (<div key={key}>
                    <img src={mainPhoto}  alt="!"/>
                    <span><b>{val.header}</b></span>
                    <div>{val.info}</div>
            </div>
            ))}
        </div>
    </div>
}