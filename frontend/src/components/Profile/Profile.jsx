import React, {useEffect, useState} from 'react'
import s from './Profile.module.css'
import {SidePhotoBar} from './SidePhotoBar/SidePhotoBar'
import {getStatus} from '../../redux/profileReducer'
import {useDispatch, useSelector} from 'react-redux'
import {getUserStatus} from '../../redux/selectors/globalSelectors'

export const Profile = ({
                            mainPhoto, photos, nickName, info, posts, isOwn, onStatusChange,
                            onAddPost
                        }) => {
    const dispatch = useDispatch()
    const status = useSelector(getUserStatus)

    useEffect(() => {
        dispatch(getStatus(6))
    }, [])

    useEffect(() => {
        setTempStatus(status)
    }, [status])

    const [isStatusChangeActive, setIsStatusChangeActive] = useState(false)
    const [tempStatus, setTempStatus] = useState(status)

    const [tempPostHead, setTempPostHead] = useState('')
    const [tempPostContent, setTempPostContent] = useState('')

    const onBlur = () => {
        setIsStatusChangeActive(false)
        onStatusChange(tempStatus)
    }

    const onClick = () => {
        onAddPost(tempPostHead, tempPostContent)
        setTempPostHead('')
        setTempPostContent('')
    }

    return <div className={s.profile}>
        <div className={s.mainPhoto}>
            <img src={mainPhoto} alt="!"/>
            {isOwn && <button>Change main photo</button>}
        </div>

        <SidePhotoBar photos={photos}/>

        <div className={s.nickName}><h1>{nickName}</h1></div>

        <div className={s.status}>
            {isOwn && isStatusChangeActive ?
                <input onChange={(e) => setTempStatus(e.target.value)}
                       value={tempStatus} autoFocus={true} onBlur={onBlur}/> :
                <h2 onDoubleClick={() => setIsStatusChangeActive(true)}>{status}</h2>
            }
        </div>

        <div className={s.info}>
            <h3>About me:</h3>
            <span>{info}</span>
        </div>

        <div className={s.addPost}>
            <div className={s.headInf}>
                <input onChange={(e) => setTempPostHead(e.target.value)}
                       value={tempPostHead} placeholder="Post head"/>
            </div>
            <div>
                <textarea onChange={(e) => setTempPostContent(e.target.value)}
                          value={tempPostContent} className={s.textarea} placeholder="Post content"/>
            </div>
            <div className={s.pin}>pin :
                <button>music</button>
                <button>photo</button>
                <button>file</button>
            </div>
            <div>
                <button onClick={onClick}>Add post</button>
            </div>
        </div>

        <div className={s.posts}>
            <h3>My posts</h3>
            {posts.map((val, key) => (<div key={key}>
                <img src={mainPhoto} alt="!"/>
                <span><b>{val.header}</b></span>
                <div>{val.info}</div>
            </div>))}
        </div>
    </div>
}