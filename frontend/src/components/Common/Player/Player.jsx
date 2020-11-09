import React, {useEffect} from 'react'
import s from './Player.module.css'
import {constantes} from '../../../static/constantes'

const {appColor, defaultMusic, downloadIco, trashIco, loopIco, playIco, stopIco, randomIco, activeLoopIco} = constantes

const Player = ({width = '60', ...props}) => {
    let {id, name, isPlay, isLooped, audio, image, currentTime, duration,
        playMusic, stopMusic, loopMusic, notLoopMusic, randomMusic,
        deleteMusic, changeCurrentTime} = props

    useEffect(() => {
        isPlay ? play() : pause()
        if (isPlay) {
            const timerId = setInterval(() => changeCurrentTime(id, audio.currentTime), 1000)
            return () => clearInterval(timerId)
        }
    });

    const play = () => playMusic(id)
    const pause = () => stopMusic(id)
    const loopTrack = () => loopMusic(id)//audio.loop = true
    const unLoopTrack = () => notLoopMusic(id)//audio.loop = false
    const muteMusic = () => audio.muted = true //block voice
    const unMuteMusic = () => audio.muted = false //unblock voice
    const random = () => randomMusic()


    const stabilTimer = time => {
        let integer = Math.ceil(Number(time))
        let seconds = integer % 60
        let minutes = Math.floor(integer / 60)
        if (minutes < 10) minutes = '0' + minutes
        if (seconds < 10) seconds = '0' + seconds
        return `${minutes}:${seconds}`
    }

    const range = React.createRef();
    const rangeChange = () => {
        changeCurrentTime(id, range.current.value)
        audio.currentTime = range.current.value
        play()
    }

    return <div className={s.player} style={{width: width+'%', marginLeft: (100-width)/2 + '%'}}>
        <span className={s.musImg}>
            {image
                ? <img src={image}/>
                : <img src={defaultMusic}/>}
        </span>

        <span className={s.playerMenu} style={{backgroundColor : appColor}}>

            <div className={s.musicName}>{name} blab blab blab ...</div>

                <span className={s.badge}>{isPlay
                ? <img src={stopIco} onClick={pause}/>
                : <img src={playIco} onClick={play}/>
            }</span>

            <span className={s.download} >
                <a href = {audio.src} download = {name}><img src={downloadIco}/></a>
            </span>

            <span className={s.time}>
                {stabilTimer(currentTime)}/{stabilTimer(duration)}
            </span>

            <input type='range' min = '0' max = {duration} step = '0.5' className={s.scroll} value={currentTime}
                   onChange={rangeChange} ref = {range}/>

            <span className={s.loop}>
                {isLooped
                ? <img src = {activeLoopIco} onClick={unLoopTrack}/>
                : <img src = {loopIco} onClick={loopTrack}/>}
            </span>

            <span className={s.mix}><img src = {randomIco} onClick={random}/></span>

            <span className={s.delete}><img src = {trashIco} onClick={() => deleteMusic(id)}/></span>
        </span>
    </div>
}

export default Player

export const SimplePlayer = ({src}) => {
    return <span>
        <audio controls="controls" src = {src}>
            <source src="track.ogg" type="audio/ogg" />
            <source src="track.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    </span>
}

