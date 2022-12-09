import { useNavigation } from '@react-navigation/native';
import React, { Component, useState } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'



export default function HomeScreen() {
    
    const [name,setName] = useState("");

    const navigation = useNavigation();

    const listButton = () =>{
        navigation.navigate("WishList App",{
            name : name,
        })
    }

    return (
        <View style={styles.container}>
            <TextInput  placeholder='Name' value={name} onChangeText={(text) =>  setName(text)} />
            
            <Button title='make your list' onPress={listButton}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    }, 
  });

