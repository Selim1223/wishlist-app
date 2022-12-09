import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';

import WishListScreen from './screens/wishListScreen';

const Stack = createNativeStackNavigator(); 

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor: "red",        
        },
        headerTintColor: "black",  
        headerTitleAlign: 'center',
      }}
      >
      <Stack.Screen name='Home' component={HomeScreen} options={{title: "Wishlist App"}}/>
      <Stack.Screen name='WishList App' component={WishListScreen} options={{headerShown: false}} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}





