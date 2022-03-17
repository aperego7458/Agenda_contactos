import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserList from './Screens/UsersList';
import CreateUserScreen from './Screens/CreateUserScreen';
import UserDetailsScreen from './Screens/UserDetailsScreen';

const Stack = createNativeStackNavigator();

function MyStack() {

  return(
    <Stack.Navigator > 
        <Stack.Screen name="UserList" component={UserList} 
          options={{ title: "Users List"}}/>
        <Stack.Screen name="CreateUserScreen" component={CreateUserScreen} 
          options={{ title: "Create New User" }}/>
        <Stack.Screen name="UserDetailsScreen" component={UserDetailsScreen} 
          options={{ title: "User Detail" }}/>
    </Stack.Navigator>
  )
}

function App() {
  return(
    <NavigationContainer styles = {styles.container}>
      <MyStack/>
    </NavigationContainer>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default App;