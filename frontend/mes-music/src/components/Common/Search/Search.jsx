import React from 'react'
import s from './Search.module.css'

const Search = ({placeholder, width='20'}) => {
    return <span className={s.search} style={{width: width + '%'}}>
        <input placeholder={placeholder} className={s.input}/>
        <span className={s.searchButton}>
            <button>search</button>
        </span>
    </span>
}

export default Search