import React from 'react';
import Swipeable from "react-native-gesture-handler/Swipeable";
import {Animated, Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import avatar from "../assets/avatar.png";



const ItemBox = (props,{navigation}) => {

    const SPACING = 20;
    const AVATER_SIZE = 70;
    const actionOnRow = (item) => {
        navigation.navigate('Profile',
            {user:item})
    };
    const leftSwipe = (progress,dragX) =>{
        const scale = dragX.interpolate({
            inputRange: [0,100],
            outputRange: [0,1],
            extrapolate: 'clamp',
        });
        return(
            <TouchableOpacity onPress={props.handleDelete} >
                <View style={styles.deleteBox}>
                    <Animated.Text style={{transform: [{scale:scale}]}}>Delete</Animated.Text>
                </View></TouchableOpacity>
        )
    };
    const rightSwipe = (progress,dragX) => {
        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });
        return (
            <TouchableOpacity onPress={props.actionOnRow}>
                <View style={styles.updateBox}>
                    <Animated.Text >Update</Animated.Text>
                </View></TouchableOpacity>
        )
    }

    return (
        <Swipeable renderLeftActions={leftSwipe} renderRightActions={rightSwipe}>
            <View style={styles.row}>
                <Image source={{uri:avatar}}
                       style={{width:AVATER_SIZE,height:AVATER_SIZE,borderRadius:AVATER_SIZE,
                           marginRight: SPACING/2
                       }}
                />
                <TouchableWithoutFeedback onPress={props.actionOnRow}>
                    <View>
                        <Text style={styles.name}>{props.data.name}</Text>
                        <Text style={styles.surname}>{props.data.surname}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </Swipeable>
    )
};
const styles = StyleSheet.create({

    deleteBox:{
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        width:100,
        borderRadius:25,
        padding:20,
        margin:20,
    },
    updateBox: {
        backgroundColor:'#eee',
        justifyContent:'center',
        alignItems:'center',
        width:100,
        borderRadius:25,
        padding:20,
        margin:20,
    },
row: {
        flexDirection:'row'
    ,padding:20,
    backgroundColor:'#FFF',
    borderRadius:12,
    margin:20,
    shadowColor:'#000',
    shadowOffset: {
        width:0,
        height:10
    },
    shadowOpacity:2,
    shadowRadius:20
},
name: {
    fontSize: 22,
    fontWeight: '700',
    color: 'grey'
},
surname: {
    fontSize: 18,
    fontWeight: '500',
    color: 'grey',
},

})

export  default ItemBox;