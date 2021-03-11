import React, {FC, useState} from "react";
import {ColorValue, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Button, Icon, Switch} from "native-base";
import {SettingsItem} from "./SettingsItem";
import {Theme} from "./Theme";
import {Confidentiality} from "./Confidentiality";
import {Account} from "./Account";
import {LogOut} from "./LogOut";


type PropType = {
    signOut : () => Promise<void>
}

export const AllSettings: FC<PropType> = ({signOut}) => {
    return <ScrollView>
        <Theme/>
        <Confidentiality/>
        <Account/>
        <LogOut signOut={signOut}/>
    </ScrollView>
}