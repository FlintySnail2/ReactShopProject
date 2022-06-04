import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Home from "./src/views/Home.js";
import Category from "./src/views/Category.js";
import ProductDetail from "./src/views/ProductDetail.js";
import Basket from "./src/views/Basket.js";
import Shipping from "./src/views/Shipping.js";
import Account from "./src/views/Account.js"
import TermsConditions from './src/views/Terms&Conditions.js';
import Register from './src/views/Register.js';

import {store} from './src/components/redux_shop';
import {Provider} from 'react-redux';

let HomeStack=createStackNavigator();
let HomeDrawerNavigator=createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <HomeDrawerNavigator.Navigator  useLegacyImplementation screenOptions={ScreenOptions} drawerStyle={{
      backgroundColor: 'grey',
      width: 240,
      color:'white'
    }} 
     drawerContent={DrawerContent}>
      <HomeDrawerNavigator.Screen name="Home" options={{headerShown:false}} component={HomeStackScreen}/>
      <HomeDrawerNavigator.Screen name="Account" component={Account}/>
      <HomeDrawerNavigator.Screen name="Shipping" component={Shipping}/>
      <HomeDrawerNavigator.Screen name="Terms&Conditions" component={TermsConditions}/>
    </HomeDrawerNavigator.Navigator>
   
    </NavigationContainer>
    </Provider>
  );
}

function HomeStackScreen(){
  return(
   <HomeStack.Navigator screenOptions={ScreenOptions}>
     <HomeStack.Screen name="Home" component={Home}/>
     <HomeStack.Screen name="Category" component={Category}/>
     <HomeStack.Screen name="ProductDetail" component={ProductDetail}/>
     <HomeStack.Screen name="Basket" component={Basket} />
     <HomeStack.Screen name="Shipping" component={Shipping} />
     <HomeStack.Screen name="Account" component={Account}/>
     <HomeStack.Screen name="Register" component={Register}/>
     <HomeStack.Screen name="TermsConditions" component={TermsConditions}/>
   </HomeStack.Navigator>
  )
}

const ScreenOptions=({navigation})=>({
  headerShown:true,
  headerTitleStyle:{
    color:"white"
  },
  headerLeft: ()=>(
     <Icon name="md-menu" style={{paddingLeft:10}} color="white" size={30} onPress={
       ()=>
       navigation.openDrawer()
     }></Icon>
  ),
  headerStyle:{
    backgroundColor: "#009eff"
  },
  headerRight: ()=>(
    <Text style={{color:'white', paddingRight:15, fontSize: 20, fontWeight:'bold'}}>Trendz</Text>
  )
 })

 function DrawerContent(props){
   return(
     <DrawerContentScrollView style={{backgroundColor:'gray'}} {...props}>
       <DrawerItem label="Home" onPress={()=>props.navigation.navigate('Home', {screen: 'Home'})}/>
       <DrawerItem label="Shipping" onPress={()=>props.navigation.navigate('Shipping', {screen: 'Shipping'})}/>
       <DrawerItem label="Account" onPress={()=>props.navigation.navigate('Account',{screen: 'Account'})}/>
       <DrawerItem label="Terms & Conditions" onPress={()=>props.navigation.navigate('Terms&Conditions',{Screen: 'Terms&Conditions'})}/>
     </DrawerContentScrollView>
   )
 }

function HomeDrawerNavigatorScreen(){
  return(
    <HomeDrawerNavigator.Navigator  useLegacyImplementation screenOptions={ScreenOptions} drawerStyle={{
      backgroundColor: 'grey',
      width: 240,
      color:'white'
    }} 
    drawerContentOptions={{
      activeTintColor: 'white',
      itemStyle: { marginVertical: 2 ,
      borderWidth:1, borderColor:'black'}
    }} drawerContent={DrawerContent}>
      <HomeDrawerNavigator.Screen name="Home" options={{headerShown:false}} component={HomeStackScreen}/>
      <HomeDrawerNavigator.Screen name="Shipping" component={Shipping}/>
      <HomeDrawerNavigator.Screen name="Terms & Conditons" component={Terms&Conditions}/>
    </HomeDrawerNavigator.Navigator>
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

