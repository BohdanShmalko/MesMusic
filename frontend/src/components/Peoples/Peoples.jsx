import React, {useEffect, useState} from 'react'
import s from './Peoples.module.css'
import {useDispatch} from "react-redux";
import {disFollow, follow, getPeoples} from '../../redux/peoplesReducer'
import {Link} from "react-router-dom";

export const Peoples = (props) => {
    const [option, setOption] = useState('peoples')
    let array = props[option]

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPeoples())
    }, [])

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
                <Link to={`/profile?id=${val.id}`}>
                    <img src={val.mainphoto} alt="My Awesome Image"/>
                    <span>{val.nickname}</span>
                    <span>{val.aboutMe}</span>
                </Link>
                <button onClick={val.followed ? () => dispatch(disFollow(val.id)) :
                    () => dispatch(follow(val.id))}>
                    {val.followed ? 'Unfollow' : 'Follow'}</button>
            </div>))}
        </div>
    </div>
}