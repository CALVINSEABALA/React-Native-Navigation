import React from 'react';
import {StyleSheet,View} from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Landing from './landing';
import {NavigationContainer} from "@react-navigation/native";

const NavBottom = () =>{



    const Tab = createMaterialBottomTabNavigator();

    return(
        <View style={styles.container}>
            <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Landing} />
                <Tab.Screen name="profile" component={Landing} />
            </Tab.Navigator>
            </NavigationContainer>
            </View>
    )
};
export default NavBottom;
const styles = StyleSheet.create({
container: {
backgroundColor:'#eee',

}
})