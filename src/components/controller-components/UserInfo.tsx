import React, { ReactElement, useState, useEffect } from 'react'

import { useGetUser } from '../api-components/useGetUser'
import { UserCard } from '../user-components/UserCard'

interface Props {
    match: any;
}

function UserInfo({ match }: Props): ReactElement {
    const username = match.params.name;
    let [ data, loading, error, fetchData ] = useGetUser(username)
    const [userInfo, setUserInfo] = useState();


    useEffect(() => {
        const fetchAndSet = async () => {
            await fetchData();
            if (data){
                setUserInfo(data)
            }
        }
        fetchAndSet();
    }, [data, fetchData])
    
    return (
        <div>
            {
            (error) ? <h1>Error Fetching User</h1> :
            (loading || !(userInfo))
                ? <h1>Loading</h1>
                : <UserCard user={userInfo} />
            }
        </div>
    )
}

export default UserInfo

