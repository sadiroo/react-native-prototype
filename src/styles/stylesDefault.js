import { StyleSheet } from "react-native";

// default grey
// const textColor = '#424242';
// const inputColor = '#e0e0e0';
// const backgroundColor = '#d1d1d1';
// const borderColor = '#A2A2A2';
// const pageColor = '#f0f0f0';
// const headerFooterColor = '#e6e6e6'

// blueish
const textColor = '#fdf0d5';
const inputColor = '#669bbc';
const backgroundColor = '#669bbc';
const borderColor = '#780000';
const pageColor = '#669bbc';
const headerFooterColor  = '#003049'

// blue too :D
// const textColor = '#04080f';
// const inputColor = '#a1c6ea';
// const backgroundColor = '#a1c6ea';
// const borderColor = '#04080f';
// const pageColor = '#507dbc';
// const headerFooterColor  = '#bbd1ea'

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
    page: {
        flex: 1,
        backgroundColor: pageColor,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    body: {
        flex: 6,
        padding: 20,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    header: {
        height: 100,
        paddingBottom: 5,
        backgroundColor: headerFooterColor,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    footer: {
        flexDirection: 'row',
        height: 80,
        paddingHorizontal: 20,
        backgroundColor: headerFooterColor,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    scrollView: {
        marginHorizontal: 20,
        marginTop: 10,
    },
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