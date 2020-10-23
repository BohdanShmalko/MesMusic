import audio from '../static/mus.mp3'

const PLAY = '/music/PLAY'
const STOP = '/music/STOP'
const LOOPED = '/music/LOOPED'
const NOT_LOOPED = '/music/NOT_LOOPED'
const RANDOM_MUSIC = '/music/RANDOM_MUSIC'
const DELETE = '/music/DELETE'
const CHANGE_CURRENT_TIME = '/music/CHANGE_CURRENT_TIME'
const SET_DURATION = '/music/SET_DURATION'

const initialState = {
    currentMusic : null,
    howManyLoad : 100,
    isLoadAll : false,
    musics : [
        {
            id : 0,
            name : 'some name 0',
            isPlay : false,
            isLooped : false,
            audio : new Audio(audio),
            currentTime : 0,
            duration : 0,
            image : 'https://i1.sndcdn.com/avatars-000232728218-4n3bfc-t500x500.jpg'
        },
        {
            id : 1,
            name : 'some name 1',
            isPlay : false,
            isLooped : false,
            audio : new Audio(audio),
            currentTime : 0,
            duration : 0,
            image : 'https://i1.sndcdn.com/avatars-000232728218-4n3bfc-t500x500.jpg'
        },
        {
            id : 2,
            name : 'some name 2',
            isPlay : false,
            isLooped : false,
            audio : new Audio(audio),
            currentTime : 0,
            duration : 0,
            image : 'https://i1.sndcdn.com/avatars-000232728218-4n3bfc-t500x500.jpg'
        }
    ]
}
let currentMusic
export const musicReducer = (state = initialState, action) => {

    switch (action.type) {
        case PLAY :
            currentMusic = state.musics.filter(obj => obj.id === action.id)[0]
            currentMusic.audio.play()
            return {...state,
            currentMusic : action.id,
            musics : state.musics.map(music => {
                if(music.id === action.id) return {...music, isPlay : true}
                return {...music, currentTime : 0, isPlay : false}
            })
        }
        case STOP :
            currentMusic = state.musics.filter(obj => obj.id === action.id)[0]
            currentMusic.audio.pause()
            return {...state,
            musics : state.musics.map(music => {
                return {...music, isPlay : false}
            })
        }
        case LOOPED :
            currentMusic = state.musics.filter(obj => obj.id === action.id)[0]
            currentMusic.audio.loop = true
            return {...state,
            musics : state.musics.map(music => {
                if(music.id === action.id) return {...music, isLooped : true}
                return music
            })
        }
        case NOT_LOOPED :
            currentMusic = state.musics.filter(obj => obj.id === action.id)[0]
            currentMusic.audio.loop = false
            return {...state,
            musics : state.musics.map(music => {
                if(music.id === action.id) return {...music, isLooped : false}
                return music
            })
        }
        case RANDOM_MUSIC : return {...state,
            musics : state.musics.sort(() => Math.random() - 0.5) //!!!!!!!!
        }
        case DELETE : return {...state,
            musics : state.musics.filter( music => music.id != action.id) //////!!!!!!!
        }
        case CHANGE_CURRENT_TIME : return {...state,
            musics : state.musics.map(music => {
                if(music.id === action.id) return {...music, currentTime : action.currentTime}
                return music
            })
        }
        case SET_DURATION : return {
            ...state,
            musics : state.musics.map(music => {
                if(music.id === action.id) return {...music, duration : action.duration}
                return music
            })
        }
        default : return state
    }
}

export const musicAC = {
    playMusic(id) { return {type : PLAY, id} },
    stopMusic(id) { return {type : STOP, id} },
    loopMusic(id) { return {type : LOOPED, id} },
    notLoopMusic(id) { return {type : NOT_LOOPED, id} },
    randomMusic() { return {type : RANDOM_MUSIC}},
    deleteMusic(id) { return {type : DELETE, id} },
    changeCurrentTime(id, currentTime) { return {type : CHANGE_CURRENT_TIME, id, currentTime}},
    setDuration(id, duration) { return {type : SET_DURATION, id, duration}}
}

