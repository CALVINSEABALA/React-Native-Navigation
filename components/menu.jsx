import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Landing from './landing';
import {View, StyleSheet, Pressable, Image} from 'react-native';
import Header from "./header";
import AddUser from './addUser';
import Profile from "./profile";
import NavBottom from './navBar';




const  Menu = () => {
    const Stack = createNativeStackNavigator();


    return (
        <View>


            <View  style={styles.navContainer}>

            <NavigationContainer>
                <Stack.Navigator initialRouteName={'Home'}>
                    <Stack.Screen name={'Home'} component={Landing}/>
                    <Stack.Screen name={'Add_user'} component={AddUser}/>
                    <Stack.Screen name={'Profile'} component={Profile}/>
                </Stack.Navigator>
            <NavBottom/>
            </NavigationContainer>


            </View>
        </View>
    )
};
export default Menu;
const styles = StyleSheet.create({
    navContainer: {
        flex:1,
        alignItems:'center',

    },
    NavContainer: {
        position:'fix',
        alignItems:'center',
        bottom:20,
    },
    NavBar: {
      flexDirection:'row',
        backgroundColor:'#99BCD9',
        width:'90%',
        justifyContent:'space-evenly',
        borderRadius:40
     },
     Icon: {
        padding:14
     }
})
