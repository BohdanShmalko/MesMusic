import React, {FC, useState} from 'react'
import {Container} from "native-base";
import {Platform, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native"
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {useSelector} from "react-redux";
import {getTheme} from "../BLL/selectors/settingsSelector";
import {ContainerLab} from "../components/Test/ContainerLab";
import {ImagesLab} from "../components/Test/ImagesLab";
import {DateAndTimeLab} from "../components/Test/DateAndTimeLab";
import {StepperLab} from "../components/Test/StepperLab";
import {SliderLab} from "../components/Test/SliderLab";
import {TableViewLab} from "../components/Test/TableViewLab";
import {WebViewLab} from "../components/Test/WebViewLab";
import {TimersLab} from "../components/Test/TimersLab";
import {Stepper} from "../components/Common/Stepper";
import {stylesTest} from "../components/Test/styles";

const TestScreen: FC<{ navigation: StackNavigationProp<RootStackParamList, 'Test'> }> = ({navigation}) => {
    const {firstMainColor} = useSelector(getTheme)

    const [firstStepper, setFirstStepper] = useState(10)
    const [secondStepper, setSecondStepper] = useState(30)
    const [isOrange, setIsOrange] = useState(false)
    const changeColor = () => setIsOrange(!isOrange)

    const [inputValue, setInputValue] = useState("")
    let textColor : string
    switch (inputValue) {
        case 'red' :
            textColor = 'red'
            break
        case 'green' :
            textColor = 'green'
            break
        case 'blue' :
            textColor = 'blue'
            break
        default :
            textColor = 'black'
    }

    return (
        <Container>
            <MainContainer color1='white' color2='white'>
                <MMHader title='Lab' useLeftBack leftPress={() => navigation.navigate('Home')} color={firstMainColor}/>
                <ScrollView style={{marginBottom : 140}}>
                    <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Lab 4</Text>
                    {Platform.OS === 'android' && <View style={{width : 100, height : 100, backgroundColor : 'green'}}></View>}
                    {Platform.OS === 'ios' && <View style={{width : 100, height : 100, backgroundColor : 'blue'}}></View>}
                    {Platform.OS === 'web' && <View style={{width : 100, height : 100, backgroundColor : 'red'}}></View>}

                    <Stepper value={firstStepper} position={'center'} min={7} max={20} increment={1} onChange={setFirstStepper}/>
                    <Stepper value={secondStepper} color={'red'} position={'left'} min={10} max={100} increment={15} onChange={setSecondStepper}/>

                    <View style={{width : 100, height : 100, backgroundColor : 'blue'}}></View>
                    <View style={stylesTest.someStyle2}></View>
                    <View style={stylesTest.someStyle1}></View>

                    <View style={{...stylesTest.someStyle1, backgroundColor : 'black'}}></View>

                    <View style={{...stylesTest.common, ...stylesTest.pinkColor}}></View>

                    <View style={{...stylesTest.common, backgroundColor : isOrange ? 'orange' : 'black'}}></View>
                    <TouchableOpacity style={{backgroundColor : 'gray'}} onPress={changeColor}><Text>Change color</Text></TouchableOpacity>

                    <DateAndTimeLab/>
                    <TextInput value={inputValue} onChangeText={setInputValue} style={{borderWidth : 2, borderColor : 'black', color : textColor, padding : 5}}/>


                    <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Lab 3</Text>
                    <ContainerLab/>
                    <ImagesLab/>
                    <DateAndTimeLab/>
                    <StepperLab/>
                    <SliderLab/>
                    <TableViewLab/>
                    <WebViewLab/>
                    <TimersLab/>
                </ScrollView>
            </MainContainer>
        </Container>
    )
}

export default TestScreen