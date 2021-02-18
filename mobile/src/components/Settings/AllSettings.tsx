import React, {FC, useState} from "react";
import {ColorValue, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Button, Icon, Switch} from "native-base";
import {SettingsItem} from "./SettingsItem";
import {Theme} from "./Theme";
import {Confidentiality} from "./Confidentiality";
import {Account} from "./Account";
import {LogOut} from "./LogOut";


type PropType = {}

export const AllSettings: FC<PropType> = (props) => {
    return <ScrollView>
        <Theme/>
        <Confidentiality/>
        <Account/>
        <LogOut/>
    </ScrollView>
}