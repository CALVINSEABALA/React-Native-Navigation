import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {View} from 'react-native';
import Landing from "./components/landing";
import {NavigationContainer} from "@react-navigation/native";
import AddUser from "./components/addUser";
import Profile from "./components/profile";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Header from "./components/header";
import 'react-native-gesture-handler';
import ItemBox from './components/itemBox';





export default function App() {
    const Stack = createNativeStackNavigator();
  return (
  <SafeAreaProvider>
    <SafeAreaView>

        <View style={styles.container}>
<View><Header/>
</View>
        <View>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={'Home'}>
                    <Stack.Screen name={'Home'} component={Landing}/>
                    <Stack.Screen name={'Add_user'} component={AddUser}/>
                    <Stack.Screen name={'Profile'} component={Profile}/>
                    <Stack.Screen name={'Item'} component={ItemBox}/>
                </Stack.Navigator>

            </NavigationContainer>
        </View>

        </View>

    </SafeAreaView>
  </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
    container: {
        flex:1,


    }
})

