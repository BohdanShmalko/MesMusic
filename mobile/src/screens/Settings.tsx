import React, {FC} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {FooterBadge} from "../components/Common/FooterBadge";
import {AllSettings} from "../components/Settings/AllSettings";
import {useSelector} from "react-redux";
import {getBackgroundObject, getTheme} from "../BLL/selectors/settingsSelector";
import {AuthContext} from "../../App";

const SettingsScreen: FC<{ navigation: StackNavigationProp<RootStackParamList, 'Settings'> }> = ({navigation}) => {
    const background = useSelector(getBackgroundObject('settingsPicture'))
    const {firstMainColor, secondMainColor} = useSelector(getTheme)
    const { signOut } = React.useContext(AuthContext);
    return (
        <Container>
            <MainContainer {...background} useFooter>
                <MMHader title='Settings' useLeftBack leftPress={() => navigation.navigate('Profile')} color={firstMainColor}/>
                <AllSettings signOut={signOut}/>
            </MainContainer>
            <FooterBadge navigation={navigation} color={firstMainColor} activeColor={secondMainColor}/>
        </Container>
    )
}

export default SettingsScreen