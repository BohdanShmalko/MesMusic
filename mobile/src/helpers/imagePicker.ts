import {Platform} from "react-native";
import * as ImagePicker from "expo-image-picker";
import {actionCreator} from "../BLL/storeRedux";

export const checkAccess = async () => {
    if (Platform.OS !== 'web'){
        const {status} = await ImagePicker.requestCameraPermissionsAsync()
        if (status !== 'granted'){
            alert('permision denight')
        }
    }
}

export const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes : ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4,4],
        base64 : true,
        quality : 1
    })
    if (!result.cancelled){
        return result
    }
}