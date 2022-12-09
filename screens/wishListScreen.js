import React, { Component, useEffect, useState } from 'react'
import { View, Text, Pressable, SafeAreaView, TextInput, FlatList, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native'
import { AntDesign,MaterialIcons } from '@expo/vector-icons';
import { styles } from '../components/styles';
import WishItem from '../components/wishItem';
import { app, db, getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from '../firebase/index';

export default function WishListScreen() {

    const route = useRoute();

    const navigation = useNavigation();

    const homeScreen = () =>{
        navigation.navigate("Home")
    };

    const [title, setTitle] = useState("");
    const [wishList,setWishList] = useState([]);
   

    const addWishItem = async () =>{
        try {
            const docRef = await addDoc(collection(db, "wish"), {
              title: title,
              isChecked: false
            });
            console.log("Document written with ID: ", docRef.id);
            alert("you have add a new wishes !")
            setTitle("");
          } catch (e) {
            console.error("Error adding document: ", e);
          }

        getWishList();
    };

    const getWishList = async () =>{ 
        const querySnapshot = await getDocs(collection(db, "wish"));
        querySnapshot.forEach((doc) => {
            console.log(doc.id,doc.data());
            console.log(doc);
            setWishList({
                ...doc.data(),
                id: doc.id, 
            });
        });
    };

    const deleteWishList = async() =>{
        const querySnapshot = await getDocs(collection(db, "wish"));

        querySnapshot.docs.map((item) =>deleteDoc(doc(db,"wish", item.id)));
        getWishList();
        alert("you have delete all wishes !")
    }

     
    useEffect(() => { 
        getWishList();
    }, []);

    return (
        <SafeAreaView >
            <View style={styles.header}>
                <Pressable onPress={homeScreen}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </Pressable>
                <Text style={styles.heading}>WishList de {route.params.name}</Text>
                <Text style={styles.noOfItems}>{wishList.length}</Text>
                <Pressable onPress={deleteWishList}> 
                    <MaterialIcons name="delete" size={30} color="black" />
                </Pressable>
            </View>

            { wishList.length > 0 ? (
                <FlatList
                    data={wishList}
                    renderItem={({ item }) => <WishItem title={item.title} 
                    isChecked={item.isChecked} 
                    id={item.id} />}
                    keyExtractor={(item) => item.id}   
                /> 
           ) : (
               <WishItem/>
            )}
            <TextInput style={styles.input} placeholder="write your wish for christmas"
             value={title} onChangeText={(text) =>setTitle(text)}
             onSubmitEditing= {addWishItem}
             />  
        </SafeAreaView>
    );
}


