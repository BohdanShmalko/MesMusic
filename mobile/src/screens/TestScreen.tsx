import React, {FC} from 'react'
import {Container} from "native-base";
import {ScrollView, Text} from "react-native"
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

const TestScreen: FC<{ navigation: StackNavigationProp<RootStackParamList, 'Test'> }> = ({navigation}) => {
    const {firstMainColor} = useSelector(getTheme)
    return (
        <Container>
            <MainContainer color1='white' color2='white'>
                <MMHader title='Lab' useLeftBack leftPress={() => navigation.navigate('Home')} color={firstMainColor}/>
                <ScrollView style={{marginBottom : 140}}>
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