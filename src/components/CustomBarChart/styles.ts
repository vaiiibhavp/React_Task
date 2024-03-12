import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    BarChart: {
        height: Dimensions.get("screen").height / 4,
    },
    viewBarItem: {
        backgroundColor: "#ccc",
        width: 50,
    },
    viewSaperator: {
        width: 10
    },

})