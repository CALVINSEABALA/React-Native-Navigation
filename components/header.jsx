 import React from 'react';
import {StyleSheet, Text, View, Button, Pressable} from "react-native";

const Header = (navigation) => {


    return(
        <View style={styles.container}>
            <Pressable onPress={ () => navigation.navigate('Home')}>
            <Text style={styles.text}>
                Welcome
            </Text>
            </Pressable>

            </View>

    )
};
export default Header;
const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        left:0,
        right:0,
        top:0,
        height:70,
        backgroundColor:'#eee',
        marginBottom:'25px',
        shadowColor:'#000',
        shadowOffset: {
            width:0,
            height:10
        },
        shadowOpacity:2,
        shadowRadius:20


    },
    text : {
        fontSize:22,
        fontWeight:'700',
        color:'#666'
    }

});