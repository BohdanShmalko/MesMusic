import React from 'react'
import {Text} from "native-base";

export const withSuspense : (component : any) => any = (Component) => {
    return (props : any) => {
        return (
            <React.Suspense fallback={<Text>Loading...</Text>}>
                <Component {...props} />
        </React.Suspense>
    )
    }
}