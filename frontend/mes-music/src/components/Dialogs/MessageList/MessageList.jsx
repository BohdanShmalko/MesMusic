import React, {useEffect, useState} from 'react'
import {Avatar, List, Spin} from 'antd'
import InfiniteScroll from 'react-infinite-scroller'
import s from './MessageList.module.css'
import 'antd/dist/antd.css'

export const MessageList = ({messages, userId, watchId}) => {
    const [data, setData] = useState(messages[watchId].messages)
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)

    const handleInfiniteOnLoad = () => {
        setLoading(true)
        if (data.length > 30) {
            setHasMore(false)
            setLoading(false)
            return
        }
        const newData = [] //getData()
        setData(newData.concat(data))
        setLoading(false)
    }

    useEffect(() => {
        setData(messages[watchId].messages)
    }, [watchId, messages])

    return <div className={s.messageList}>
        <div className={s.demoInfiniteContainer}>
            <InfiniteScroll
                initialLoad={false}
                pageStart={0}
                loadMore={handleInfiniteOnLoad}
                hasMore={!loading && hasMore}
                useWindow={false} // isReverse={true}
            >
                <List
                    dataSource={data}
                    renderItem={item => (
                        <List.Item key={item.id}>
                            {/*className={item.who === userId ? s.myMessage : s.whoseMessage}*/}
                            <List.Item.Meta
                                avatar={<Avatar src={messages[watchId].peoples[item.who].photo} alt={'!'}/>}
                                title={messages[watchId].peoples[item.who].nickName}
                                description={item.message}
                            />
                            <div>{item.time}</div>
                        </List.Item>
                    )}
                >
                    {loading && hasMore && (
                        <div className={s.demoLoadingContainer}>
                            <Spin/>
                        </div>
                    )}
                </List>
            </InfiniteScroll>
        </div>
    </div>
}