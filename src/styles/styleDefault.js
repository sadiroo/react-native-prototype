import { StyleSheet } from "react-native";

const textColor= '#424242';
const inputColor = '#e0e0e0';
const backgroundColor = '#d1d1d1';
const text = {
    fontSize: 20,
        fontWeight: '500',
        color: textColor,
        textAlign: 'center',
        textAlignVertical: 'center',
}
const box = {
    height: 50,
    padding: 3,
    borderRadius: 5,
    // margin: 8,
    paddingHorizontal: 10,
    shadowColor: '#fff',
    shadowOffset: 5,
    shadowOpacity: 5,
}

const stylesDefault = StyleSheet.create({
    text: {
        ...text,
    },
    button:{
        ...text,
        ...box,
        backgroundColor: backgroundColor,
        color: textColor,
        
    },
    input: {
        ...text,
        ...box,
        backgroundColor : inputColor,
        borderWidth: 1,
        borderRadius: 5,
    }

})

export default stylesDefault;