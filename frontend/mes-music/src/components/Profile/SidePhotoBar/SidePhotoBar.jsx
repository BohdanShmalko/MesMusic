import React, {useEffect, useState} from 'react'
import s from './SidePhotoBar.module.css'

export const SidePhotoBar = ({photos}) => {

    let [photoNumber, setPhotoNumber] = useState(0)
    let [AllowedToRun, setAllowedToRun] = useState(true)

    const RECOVERY_TIME = 3000
    const TIME_FOR_ALLOWED = 10000
    const PHOTO_QUANTITY = 5

    const onClick = (value) => {
        setAllowedToRun(false)
        setPhotoNumber(photoNumber + value)
        setTimeout(() => setAllowedToRun(true), TIME_FOR_ALLOWED)
    }

    useEffect(() => {
        if (AllowedToRun) {
            const interval = setInterval(() => setPhotoNumber(photoNumber++), RECOVERY_TIME)
            return () => clearInterval(interval)
        }
    }, [AllowedToRun]);

    return <div className={s.sidePhotoBar}>
        <button onClick={() => onClick(-1)} className={s.button}>/////\\\\\</button>
        <div>
            {(() => {
                const map = []
                for (let i = photoNumber; i < photoNumber + PHOTO_QUANTITY; i++) {
                    let item
                    if (i < 0) {
                        item = photos[((i + 1) % photos.length) + photos.length - 1]
                    } else {
                        item = photos[i % photos.length]
                    }
                    map.push(
                        <div key={i} className={s.photos}>
                            <img src={item} alt="!"/>
                        </div>
                    )
                }
                return map
            })()}
        </div>
        <button onClick={() => onClick(+1)} className={s.button}>\\\\\/////</button>
    </div>
}