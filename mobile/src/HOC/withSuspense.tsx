import React from 'react'
import {Text} from "native-base";
import {Fallback} from "../components/Common/Fallback";

export const withSuspense : (component : any) => any = (Component) => {
    return (props : any) => {
        return (
            <React.Suspense fallback={<Fallback/>}>
                <Component {...props} />
        </React.Suspense>
    )
    }
}