import React from 'react'
import s from './LoadFile.module.css'

const LoadFile = ({children}) => {
    const loader = React.createRef();
    const clickChildren = ref => {
        ref.current.click()
    }
    return <span>
        <input type='file' className={s.loader} ref={loader}/>
        <span className={s.children} onClick={()=>clickChildren(loader)}>{children}</span>
    </span>
}

export default LoadFile