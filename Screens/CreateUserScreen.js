import React, {useState} from "react";
import { View, Text, Button, TextInput, ScrollView, StyleSheet, SafeAreaView } from "react-native"

const CreateUserScreen = () => {

    const [state, setState] = useState({

        name: '',
        phone: '',
        address: '',
        date_birth: '',

    })
    
    const handleChangeText = (name, value) => {
        setState({ ...setState,  [name]: value})
    }

    const createNewUser = async () => {
        if (state.name === "") {
          alert("please provide a name");

        } else {
    
          try {
            await firebase.db.collection("users").add({
              name: state.name,
              phone: state.phone,
              address: state.address,
              date_birth: state.date_birth,
            });
    
            props.navigation.navigate("UsersList");
          } catch (error) {
            console.log(error)
          }
        }
      };
        
    return (
        <SafeAreaView>
        <ScrollView>
            
            <View styles = {styles.container}>
                <TextInput styles = {styles.datos} placeholder="Name user" 
                onChangeText={(value) => handleChangeText("name", value)}
                keyboardType="text"/>
            </View>
            <View styles = {styles.container}>
                <TextInput styles = {styles.datos} placeholder="Phone" 
                onChangeText={(value) => handleChangeText("phone", value)}
                keyboardType="numeric"/>
            </View>
            <View styles = {styles.container}>
                <TextInput styles = {styles.datos} placeholder="Address" 
                onChangeText={(value) => handleChangeText("address", value)}/>
            </View>
            <View styles = {styles.container}>
                <TextInput styles = {styles.datos} placeholder="Date of birth"
                onChangeText={(value) => handleChangeText("date_birth", value)}
                keyboardType="date"/>
            </View>

            <View styles = {styles.text}>
            <Button name="Save User" onPress={() => createNewUser()}/>
            </View>

        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },

    inputGroup: {
        flex: 1,
        padding: 0,
        marginBotton: 15,
        borderBottonWidth: 1,
        borderBottonColor: '#cccccc'
    },

    datos: {
        color: 'black',
        fontSize: 18,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20, 
        fontWeight: '600',
        paddingLeft: 20,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: 'black',
        paddingRight: 12,
    },
    
    
})

export default CreateUserScreen