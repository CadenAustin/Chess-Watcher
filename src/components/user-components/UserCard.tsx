import React, { ReactElement } from 'react'
import ReactCountryFlag from "react-country-flag"


import { Headline, Body, Subheading } from '@itwin/itwinui-react'


interface Props {
    user: any;
}

export function UserCard({ user }: Props): ReactElement {
    if (user.profile){
        return (
            <div>
                <Headline>
                    {user.title && user.title+": "} {user.id}
                    <ReactCountryFlag countryCode={user.profile.country} svg/>
                    
                </Headline>
                <Subheading>{user.profile.firstName} {user.profile.lastName}</Subheading>
                <Subheading>Fide Rating: {user.profile.fideRating}</Subheading>

                <Body>{user.profile.bio}</Body>
            </div>
        )
    } else {
        return (
            <div>
                <Headline>{user.title}: {user.id}</Headline>
            </div>
        )
    }
}

export default UserCard
