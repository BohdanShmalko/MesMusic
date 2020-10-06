import React from 'react'
import s from './Peoples.module.css'

export const Peoples = (props) => {
    return <div className={s.peoples}>
        <div className={s.search}>
            <select>
                <option>Users</option>
                <option>Groups</option>
            </select>
            <input/>
            <button>Search</button>
        </div>
        <div className={s.objects}>
            {props.peoples.map((val, key) => (<div key={key} className={s.objectItem}>
                    <img src={val.photo} alt="My Awesome Image"/>
                    <span>{val.nickName}</span>
                    <span>{val.info}</span>
                    <button>{val.follow ? 'Unfollow' : 'Follow'}</button>
                </div>
            ))}
        </div>
    </div>
}