import React from "react"
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from "react-native"
import CreateUserScreen from "./CreateUserScreen"
import { NavigationContainer } from '@react-navigation/native'; 
import {Icon} from "react-native-elements"

function UserList ({navigation}) {
    return (
        <ScrollView>
            <View styles = {styles.container}>
            <Icon  
                name='person-add-outline'
                type='ionicon'
                color='#517fa4'
                reverse
                onPress={() => navigation.navigate('CreateUserScreen')}
                containerStyle={styles.button}/>
            </View>            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          position: 'fixed'   
    },

    button: {
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        position: 'absolute',
        botton: 10,
        left: 10,
    }
})

export default UserList