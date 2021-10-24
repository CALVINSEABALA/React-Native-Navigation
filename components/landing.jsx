import  React, {useState,useEffect} from 'react';
import {StatusBar,Dimensions, FlatList, Image, Text, View, StyleSheet, Button} from 'react-native';
import data from './data';
import background from '../assets/background.png';
import ItemBox from "./itemBox";


const SCREEN_WIDTH = Dimensions.get('window').width;
const Landing = ({navigation}) => {
    const [users,setUsers] = useState([]);
    const backgroundImg = background;
    const SPACING = 20;
    const deleteItem = (index) => {
        const list = [...users];
        users.splice(index,1)
        list.splice(index,1)
        setUsers(list)
        navigation.navigate('Home')
    };
    const  updateItem = (item) => {

        navigation.navigate('Profile',
            {user:item})
    };
    const actionOnRow = (item) => {
        navigation.navigate('Profile',
            {user:item})
    };

    useEffect(()=>{
        setUsers(data);
    },[]);
    return (


        users.length <= 1 ?
        <View style={styles.container} >
            <Image source={{uri:backgroundImg}}
                   style={StyleSheet.absoluteFill}
                   blurRadius={5}


            />
            <View>


                <FlatList data={users}
                          keyExtractor={(item, index) => {
                              return item.id;}}
                          contentContainerStyle={{
                              padding:SPACING,
                              paddingTop: StatusBar.currentHeight || 42,
                          }}
                          renderItem={({item,index}) => {
                           return (
                            <ItemBox data={item} handleDelete={() => deleteItem(index)} actionOnRow={()=>actionOnRow(item)}/>

                           )
                          }
                          } />

            </View>
            <View style={styles.btn}>
<Button title={'Add New User'} style={styles.btn_add} onPress={() => navigation.navigate('Add_user')}/>
            </View>
            </View>
            :
            <View>
              <Text>
                  Please Add User
              </Text>
                <Button title={'Add New User'} style={styles.btn_add} onPress={() => navigation.navigate('Add_user')}/>
            </View>

    )
}
const styles = StyleSheet.create({
    btn_add: {
        borderRadius:15,
        margin: '20px',
        padding:'20px',
        width:'50%',
        backgroundColor: 'red'
    },

    container: {
        marginTop: '80px',
        marginLeft: '20px',
        marginRight: '20px',
        paddingTop:'20px'
    },
    btn: {
        margin:'20px',
        padding:'20px',
        width:'10'
    },
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
    }
})

export default Landing;