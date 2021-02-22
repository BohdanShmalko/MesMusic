import React, {FC} from "react";
import {Timer} from "../Common/Timer";

type PropType = {}

export const TimersLab: FC<PropType> = (props) => {
    return <Timer color={'green'} size={20} onReset={(value) => {
    }} onStart={(value) => {
    }} onStop={(value) => {
    }}/>
}