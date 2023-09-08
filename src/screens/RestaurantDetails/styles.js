import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    page: {
     flex: 1, 
    },   
    icon:{
       position: "absolute",
       top: 40,
       left: 10,
    },
    image:{
       width: "100%",
       aspectRatio: 4 / 3,
    },
    title: {
       fontSize: 35,
       fontWeight: "600",
       marginVertical: 10,
    },
    menuTitle:{
        marginTop: 20,
        fontSize: 17,
        letterSpacing: 0.7,
    },
    subtitle: {
       color: "#525252",
       fontSize: 15,
    },
    container: {
       margin: 10,
    },
});