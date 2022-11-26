import { StyleSheet } from "react-native";

// const textColor = 'red';
const textColor = '#424242';
const inputColor = '#e0e0e0';
const backgroundColor = '#d1d1d1';
const borderColor = '#A2A2A2';
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
    borderRadius: 4,
    borderWidth: 1,
    borderColor: borderColor,
    marginVertical: 3,
    paddingHorizontal: 10,

}

const stylesDefault = StyleSheet.create({
    text: {
        ...text,
    },
    subtitle: {
        ...text,
        borderBottomWidth: 1,
        paddingBottom: 3,
        marginBottom: 10,
        fontWeight: '600',
        borderBottomColor: backgroundColor,
    },
    button: {
        ...text,
        ...box,
        backgroundColor: backgroundColor,
        color: textColor,
    },
    input: {
        ...text,
        ...box,
        backgroundColor: inputColor,
    }

})

export default stylesDefault;