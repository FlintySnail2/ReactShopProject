import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {store} from './src/components/redux_shop';
import { Provider } from 'react-redux';

// react-navigation/native

//IMPORT VIEWS
import Home from './src/views/Home' 
import  Category from './src/views/Category';
import ProductDetail from './src/views/ProductDetail';
import Basket from './src/views/Basket';


var HomeStack=createStackNavigator();
//ADD shipping screen
export default function App() {
  return (
<Provider store={store}>
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home}/>
        <HomeStack.Screen name="Category" component={Category}/>
        <HomeStack.Screen name="ProductDetail" component={ProductDetail}/>
        <HomeStack.Screen name="Basket" component={Basket}/>
        

      </HomeStack.Navigator>
    </NavigationContainer>
    </Provider>
  
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
