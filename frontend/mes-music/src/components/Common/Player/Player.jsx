import React from 'react'
import s from './Player.module.css'

let isPlay = true
const play = mus => {
    mus.play()
    isPlay = false //dispatch callback
}
const pause = mus => {
    mus.pause()
    isPlay = true //dispatch callback
}
const trackLoop = mus => mus.loop = !mus.loop
const trackMuted = mus => mus.muted = true //block music
const currentTime = mus => console.log(mus.currentTime) //how many play
const duratation = mus => console.log(mus.duration) //music length
const deleteMusic = mus => {}
const download = mus => {}
const randomMusic = () => {}

const Player = ({musSrc, img = 'https://img.itch.zone/aW1nLzI1NjA3MTkucG5n/original/kdaCNO.png', width = '60'}) => {
    let myaudio = new Audio(musSrc)
    return <div className={s.player} style={{width: width+'%', marginLeft: (100-width)/2 + '%'}}>
        <span className={s.musImg}><img src = {img}/></span>
        <span className={s.playerMenu}>
            <div className={s.musicName}>Music name blab blab blab blab blab blab...</div>
        <span className={s.badge}>{isPlay
            ? <img src='https://image.flaticon.com/icons/png/512/117/117098.png' onClick={() => play(myaudio)}/>
            : <img src='https://image.flaticon.com/icons/png/512/61/61039.png' onClick={pause(myaudio)}/>
        }</span>
        <span className={s.download} >
            <img src='https://www.stouffvilletoyota.com/wp-content/uploads/2019/08/download-logo-png-image-77292.png' onClick={download(myaudio)}/>
        </span>
        <span className={s.time}>
            0:00/12:07
        </span>
        <span className={s.line}></span>
        <span className={s.loop}><img src = 'https://lh3.googleusercontent.com/GDqE78shHZiSF-VVTtgxrTt6GMtLiqTKId5HEEPHl3FAxASHxkP5uHFNmhrokHmjuMM' onClick={trackLoop(myaudio)}/></span>
        <span className={s.mix}><img src = 'https://icon-library.com/images/shuffle-icon/shuffle-icon-21.jpg' onClick={randomMusic()}/></span>
        <span className={s.delete}><img src = 'https://www.flaticon.com/svg/static/icons/svg/1799/1799391.svg' onClick={deleteMusic(myaudio)}/></span>

        </span>
    </div>
}

export const SimplePlayer = ({src}) => {
    return <span>
        <audio controls="controls" src = {src}>
            <source src="track.ogg" type="audio/ogg" />
            <source src="track.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    </span>
}

export default Player