import React, {useEffect, useState} from 'react'
import s from './SidePhotoBar.module.css'
import {Button} from 'antd'

export const SidePhotoBar = ({photos}) => {

    const [photoNumber, setPhotoNumber] = useState(0)
    const [AllowedToRun, setAllowedToRun] = useState(true)

    const RECOVERY_TIME = 3000
    const TIME_FOR_ALLOWED = 10000
    const PHOTO_QUANTITY = 5

    const onChangePhoto = (value) => {
        setAllowedToRun(false)
        setPhotoNumber(photoNumber + value)
        setTimeout(() => setAllowedToRun(true), TIME_FOR_ALLOWED)
    }

    useEffect(() => {
        if (AllowedToRun) {
            const interval = setInterval(() => setPhotoNumber((photoNumber + 1)), RECOVERY_TIME)
            return () => clearInterval(interval)
        }
    });

    return <div className={s.sidePhotoBar}>
        <Button type="primary" shape="circle" onClick={() => onChangePhoto(-1)} className={s.button}>/\</Button>
        {/*<UpCircleTwoTone height='5em'  className={s.button}/>*/}
        <div className={s.photoBlock}>
            {new Array(PHOTO_QUANTITY).fill(0)
                .map((value, index) => {
                    let item, i = photoNumber + index
                    i < 0
                        ? item = photos[((i + 1) % photos.length) + photos.length - 1]
                        : item = photos[i % photos.length]
                    return <div key={i} className={s.photo}>
                        <img src={item} alt="!"/>
                    </div>
                })}
        </div>
        <Button type="primary" shape="circle" onClick={() => onChangePhoto(+1)} className={s.button}>\/</Button>
    </div>
}