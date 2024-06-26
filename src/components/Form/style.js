import { Button, StyleSheet } from "react-native";


const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: "center",
        paddingTop: 30,
    },
    form: {
        width: "100%",
    },
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30,
    },
    textbuttonCalculator: {
        fontSize: 20,
        color: "#ffffff",
    },
    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    },
    exhibitionResultImc: {
        width: "100%",
        height: "50%",
    },
    listImcs: {
        marginTop: 20,
    },
    resultImcItem: {
        fontSize: 22,
        color: "red",
        height: 50,
        width: "100%",
        textAlign: "center",
        paddingTop: 10,
    },
    textResultItem: {
        fontSize: 16,
        color: "black",
    },
});

export default styles;