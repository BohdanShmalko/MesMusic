import React, {FC} from "react";
import {ScrollView, Text, View} from "react-native";
import WebView from "react-native-webview";

type PropType = {}

export const WebViewLab: FC<PropType> = (props) => {
    return <View>
        <Text>WebView</Text>
        <WebView source={{ uri: 'https://www.google.com/' }}
                 style={{ marginTop: 20, minHeight : 500 }}/>
    </View>;

}