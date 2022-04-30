import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// react-navigation/native

//IMPORT VIEWS
import Home from './src/views/Home' 
import  Category from './src/views/Category';
import ProductDetail from './src/views/ProductDetail';

var HomeStack=createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home}/>
        <HomeStack.Screen name="Category" component={Category}/>
        <HomeStack.Screen name="ProductDetail" component={ProductDetail}/>

      </HomeStack.Navigator>
    </NavigationContainer>

  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
