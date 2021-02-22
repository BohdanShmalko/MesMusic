import React, {FC, useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker"

type PropType = {}

export const DateAndTimeLab: FC<PropType> = (props) => {
    const [isVisibleDate, setVisibleDate] = useState(false)
    const changeDateVisible = () => setVisibleDate(!isVisibleDate)

    const [currentDate, setCurrentDate] = useState<string>(new Date().toDateString())

    const [isVisibleTime, setVisibleTime] = useState(false)
    const changeTimeVisible = () => setVisibleTime(!isVisibleTime)

    const [currentTime, setCurrentTime] = useState<string>(new Date().toTimeString())
    return <View>
        <Text>Current date : {currentDate}</Text>
        <TouchableOpacity style={{backgroundColor: '#ffc936', borderRadius: 8, marginBottom: 10}}
                          onPress={changeDateVisible}>
            <Text style={{color: 'white', textAlign: "center"}}>Show DatePicker</Text>
        </TouchableOpacity>

        <Text>Current time : {currentTime}</Text>
        <TouchableOpacity style={{backgroundColor: '#34a4fa', borderRadius: 8, marginBottom: 10}}
                          onPress={changeTimeVisible}>
            <Text style={{color: 'white', textAlign: "center"}}>Show TimePicker</Text>
        </TouchableOpacity>

        <DateTimePickerModal //date={new Date(currentDate)}
            isVisible={isVisibleDate} onConfirm={(dateTime) => {
            setCurrentDate(new Date(dateTime).toDateString())
            changeDateVisible()
        }} onCancel={changeDateVisible} mode={"date"}/>

        <DateTimePickerModal isVisible={isVisibleTime} onConfirm={(dateTime) => {
            setCurrentTime(new Date(dateTime).toTimeString())
            changeTimeVisible()
        }} onCancel={changeTimeVisible} mode={'time'}/>
    </View>
}