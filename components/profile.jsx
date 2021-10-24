import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet,Image} from 'react-native';
import data from './data';
import backgroundImg from '../assets/avatar.png'


const Profile = ({route,navigation}) => {
    const { user } = route.params;
    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [age,setAge] = useState('');
    const [location,setLocation] = useState('');
    const [gender,setgender] = useState('');
    const  createUser = () => {
        if ((name.length == 0)||(surname.length==0)||(age.length==0) || (location.length==0) || (gender.length==0)){
            setTimeout(()=> {
                alert('Nothing Updated')
                navigation.navigate('Home')}
            )
        }
        else {

            data.filter(users => {
                if (users.id === user.id){
                    users.name = name;
                    users.surname = surname;
                    users.gender = gender;
                    users.location = location;
                    users.age = age;
                    alert(' Updated Successfully')
                    navigation.navigate('Home')
                } else  {
                    alert(' User not Found')
                    navigation.navigate('Home')
                }

            })



        }

        }


    return(
        <View style={styles.container}>
            <Image source={{uri:backgroundImg}}
                   style={StyleSheet.absoluteFill}
                   blurRadius={5}
            />
            <View>

                <TextInput style={styles.input} value={name} onChangeText={(text) => setName(text)} placeholder={user.name}/>
                <TextInput style={styles.input} value={surname} onChangeText={(text => setSurname(text))} placeholder={user.surname}/>
                <TextInput style={styles.input} value={age} onChangeText={(text => {setAge(text)})} placeholder={user.age}/>
                <TextInput style={styles.input} value={location} onChangeText={(text => setLocation(text))} placeholder={user.location}/>
                <TextInput style={styles.input}  value={gender} onChangeText={(text => setgender(text))} placeholder={user.gender}/>

            </View>
            <View>
                <Button onPress={createUser} title={'Update Details'}/>
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
export default Profile;