import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Image} from 'react-native';
import data from './data';
import backgroundImg from '../assets/background.png'



const AddUser = ({navigation}) => {
    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [age,setAge] = useState('');
    const [location,setLocation] = useState('');
    const [gender,setgender] = useState('');
    const  createUser = () => {
        if ((name.length == 0)||(surname.length==0)||(age.length==0) || (location.length==0) || (gender.length==0)){
           setTimeout(()=> {
            alert('Please enter all fields')
            navigation.navigate('Add_user')}
           )
        }
        else {

            data.push({
                id:data.length +1,
                name:name,
                surname:surname,
                location:location,
                age:age,
                gender:gender,
            })
            alert('User Successfully added')
            navigation.navigate('Home')
        }
    }

    return(
    <View style={styles.container}>
        <Image source={{uri:backgroundImg}}
               style={StyleSheet.absoluteFill}
               blurRadius={10}


        />
    <View>
        <TextInput style={styles.input} value={name} onChangeText={(text) => setName(text)} placeholder={'Enter Your name'}/>
        <TextInput style={styles.input} value={surname} onChangeText={(text => setSurname(text))} placeholder={'Enter Your Surname'}/>
        <TextInput style={styles.input} value={age} onChangeText={(text => {setAge(text)})} placeholder={'Enter Your Age'}/>
        <TextInput style={styles.input} value={location} onChangeText={(text => setLocation(text))} placeholder={'Enter Your Location'}/>
        <TextInput style={styles.input}  value={gender} onChangeText={(text => setgender(text))} placeholder={'Enter Your Gender'}/>

    </View>
        <View>
            <Button onPress={createUser} title={'Add User'}/>

        </View>

    </View>

    )

}


const styles = StyleSheet.create({
    input: {
        height:50,
        padding:10,
        borderRadius:10,
        backgroundColor:'#fff',
        margin: '50',
        marginBottom:'20px',
        borderColor: '#7a42f4',
        borderWidth: 2,
    },

        container: {
            marginTop: '80px',
            marginLeft: '20px',
            marginRight: '20px',
            padding:'20px'
        },

});
export default AddUser;