import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    textTitle: {
        fontSize: 16,
        color: "#000",
        fontWeight: "700",
    },
    textSubtitle: {
        fontSize: 14,
        color: "#000",
        fontWeight: "400",
        marginTop: 2
    },
    textRange: {
        fontSize: 14,
        color: "#000",
        fontWeight: "400",
        marginBottom: 5
    },
    viewRangePickerContainer: {
        position: "absolute",
        zIndex: 1,
        top: -13,
        left: -10,
        right: -10,
    },
    viewTitleContainer: {
        marginVertical: 20
    },
    viewRowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    viewMinMaxContainer: {
        flex: 0.45,
        marginVertical: 20,
        borderWidth: 1,
        borderColor: "#CCC",
        borderRadius: 5,
        padding: 10,
    },
    viewLine: {
        backgroundColor: "#CCC",
        height: 1,
        flex: 0.05
    },
    textMinimum: {
        fontSize: 14,
        color: "#999",
        fontWeight: "400",
    },
    textAmount: {
        fontSize: 14,
        color: "#000",
        fontWeight: "400",
    }
})