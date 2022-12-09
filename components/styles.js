import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: "red",
        width: "95%",
        alignSelf: "center",
        padding: 10,
        marginTop: 15,
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 10,
    },
    heading: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: "500",
        flex: 1,
    
    },
    noOfItems: {
        fontSize: 22,
        fontWeight: "400",
        marginRight: 15,

    },
    container: {
     flexDirection : "row",
     backgroundColor: "lightgrey",
     justifyContent: "space-between",
     padding :10,
     alignItems: "center",
     width: "90%",
     alignSelf: "center",
     borderRadius: 10,
     marginVertical: 10,
    
    },
    title: {
        flex: 1,
        marginLeft: 10,
        fontSize: 17,
        fontWeight: "500",
    },
    input: {
        backgroundColor: "lightgrey",
        padding: 10,
        fontSize: 17,
        width: "90%",
        alignSelf: "center",
        borderRadius: 10,
        
    },
  });

  export {styles};