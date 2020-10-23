import React from 'react'
import s from './Music.module.css'
import Search from '../Common/Search/Search'
import LoadFile from "../Common/LoadFile/LoadFile";
import PlayerConteiner from "../Common/Player/PlayerConteiner";

const Music = (props) => {
    let {playMusic, stopMusic, loopMusic, notLoopMusic, randomMusic, deleteMusic, changeCurrentTime, setDuration} = props

    const PlayerElements = props.music.musics.map(music => <PlayerConteiner
        playMusic = {playMusic} stopMusic = {stopMusic} loopMusic = {loopMusic}
        notLoopMusic = {notLoopMusic} randomMusic = {randomMusic} deleteMusic = {deleteMusic}
        changeCurrentTime = {changeCurrentTime} setDuration = {setDuration} key = {music.id} {...music}/>)

    return <div className={s.music}>
        {/*}<SimplePlayer src = {mus}/>{*/}
        <Search placeholder='find music' width='40'/>
        <span className={s.addMusic}>
            <LoadFile>
                <button>add music</button>
            </LoadFile>
        </span>
        {PlayerElements}
    </div>
}

export default Music