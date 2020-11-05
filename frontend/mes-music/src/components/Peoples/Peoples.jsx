import React, {useState} from 'react'
import s from './Peoples.module.css'

export const Peoples = (props) => {
    const [option, setOption] = useState('peoples')
    let array = props[option]

    return <div className={s.peoples}>
        <div className={s.search}>
            <select value={option} onChange={(e) => setOption(e.target.value)}>
                <option value='peoples'>Users</option>
                <option value='groups'>Groups</option>
            </select>
            <input/>
            <button>Search</button>
        </div>
        <div className={s.objects}>
            {array.map((val, key) => (<div key={key} className={s.objectItem}>
                    <img src={val.photo} alt="My Awesome Image"/>
                    <span>{val.nickName}</span>
                    <span>{val.info}</span>
                    <button>{val.follow ? 'Unfollow' : 'Follow'}</button>
                </div>
            ))}
        </div>
    </div>
}