import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {store} from './src/components/redux_shop';
import { Provider } from 'react-redux';

import Icon from '@expo/vector-icons/Ionicons';

var HomeStack =createStackNavigator();
var HomeDrawerNavigator=createDrawerNavigator();

// react-navigation/native

//IMPORT VIEWS
import Home from './src/views/Home' 
import  Category from './src/views/Category';
import ProductDetail from './src/views/ProductDetail';
import Shipping from './src/views/Shipping';
import Basket from './src/views/Basket';



// var DrawNav=createDrawerNavigator();
// export default function App() {
//   return (
// <Provider store={store}>
//     <NavigationContainer>
//       <DrawNav.Navigator>
          
//         <DrawNav.Screen name="Home" component={Home}/>
//         <DrawNav.Screen name="Category" component={Category}/>
//         <DrawNav.Screen name="ProductDetail" component={ProductDetail}/>
//         <DrawNav.Screen name="Basket" component={Basket}/>
        

//       </DrawNav.Navigator>
//     </NavigationContainer>
//     </Provider>
  
//   );
// }

var HomeDrawerNavigator=createStackNavigator();
//ADD shipping screen
export default function App() {
  return (
<Provider store={store}>
    <NavigationContainer>
      <HomeDrawerNavigator.Navigator useLegacyImplementation screenOptions={ScreenOptions} drawerStyle={{
        backgroundColor:'grey', width:240, color:'white'
      }} drawerContent={DrawerContent}>
        <HomeDrawerNavigator.Screen name="Home" component={HomeStackScreen} options={{headerShown:false}}/>
        <HomeDrawerNavigator.Screen name="Basket" component={Basket}/>
        <HomeDrawerNavigator.Screen name="Shipping" component={Shipping}/>
      </HomeDrawerNavigator.Navigator>
    </NavigationContainer>
    </Provider>
  
  );
}

function DrawerContent(props){
  return(
    <DrawerContentScrollView style={{backgroundColor:'gray'}}{...props}>
      <DrawerItem label="Home" onPress={()=> props.navigation.navigate('Home,',{screen: 'Home'})}/>
      <DrawerItem label="Shipping" onPress={()=> props.navigation.navigate('Shipping,',{screen: 'Shipping'})}/>
    </DrawerContentScrollView>
  )
}

const ScreenOptions=({navigation})=>({
  headerShown:true,
  headerTitleStyle:{
    color:'white'
  },
  headerLeft:()=>(
      <Icon name="md-menu" color="white" style={{paddingLeft:15}} size={30} onPress={()=>navigation.openDrawer()} />
),
  headerRight:()=>(
    <Text style={{color:'white', fontSize:20, paddingRight:15}}>Trendz Fashion Store</Text>
  ),
  headerStyle:{
    backgroundColor:"black"
  }
})

function HomeStackScreen(){
  return(

    <HomeStack.Navigator screenOptions={ScreenOptions}>
      <HomeStack.Screen name="Home" component={Home}/>
      <HomeStack.Screen name="Category" component={Category}/>
      <HomeStack.Screen name="ProductDetail" component={ProductDetail}/>
      <HomeStack.Screen name="Basket" component={Basket}/>
    </HomeStack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
