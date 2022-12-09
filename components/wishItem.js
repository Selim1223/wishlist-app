import React, { Component, useState } from 'react'
import { View,Pressable,Text } from 'react-native';
import { styles } from './styles';
import { AntDesign,MaterialIcons } from '@expo/vector-icons';
import{db, deleteDoc, doc, updateDoc} from '../firebase/index'; 


const WishItem = (props) => {

    const [isChecked, setIsChecked] = useState(props.isChecked);

    const updateIsChecked = async() =>{
        const wishRef = doc(db, "wish",props.id);

        await updateDoc(wishRef,{
            isChecked: isChecked,
        });
    }; 

    const deleteWishItem = async () =>{
        await deleteDoc(doc(db, "wish", props.id));
        props.getWishList();
    }

  /*  useEffect(() =>{
        updateIsChecked();
    }, [isChecked]);*/



    return (
        <View style={styles.container}>
        <Pressable onPress={() =>setIsChecked(!isChecked)}>
            {isChecked  ? (
                <AntDesign name="staro" size={24} color="black" />
            ) : (
                <AntDesign name="star" size={24} color="black" />
            )}        
        </Pressable>
        <Text style={styles.title}>{props.title}</Text>
        <Pressable onPress={deleteWishItem}>
                <MaterialIcons name="delete" size={24} color="black" />
        </Pressable>
    </View>
    )
  }

  export default WishItem;
