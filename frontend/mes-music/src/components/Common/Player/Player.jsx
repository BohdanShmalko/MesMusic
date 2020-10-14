import React from 'react'
import s from './Player.module.css'
import {constantes} from "../../../static/constantes";

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
const random = () => {}

const {appColor, defaultMusic, downloadMusic, trashMusic, loopMusic, playMusic, stopMusic, randomMusic} = constantes

const Player = ({musSrc, img = defaultMusic, width = '60'}) => {
    let myaudio = new Audio(musSrc)
    return <div className={s.player} style={{width: width+'%', marginLeft: (100-width)/2 + '%'}}>
        <span className={s.musImg}><img src = {img}/></span>
        <span className={s.playerMenu} style={{backgroundColor : appColor}}>
            <div className={s.musicName}>Music name blab blab blab blab blab blab...</div>
        <span className={s.badge}>{isPlay
            ? <img src={stopMusic} onClick={() => play(myaudio)}/>
            : <img src={playMusic} onClick={pause(myaudio)}/>
        }</span>
        <span className={s.download} >
            <img src={downloadMusic} onClick={download(myaudio)}/>
        </span>
        <span className={s.time}>
            0:00/12:07
        </span>
        <span className={s.line}></span>
        <span className={s.loop}><img src = {loopMusic} onClick={trackLoop(myaudio)}/></span>
        <span className={s.mix}><img src = {randomMusic} onClick={random()}/></span>
        <span className={s.delete}><img src = {trashMusic} onClick={deleteMusic(myaudio)}/></span>

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