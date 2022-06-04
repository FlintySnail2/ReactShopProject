import React, { Component} from "react";
import { View, Text,TouchableOpacity,ImageBackground } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from '@expo/vector-icons/Ionicons';

    class Account extends Component{
      render(){
        return(


    
   <View>
     {/* <Image source={require('../../assets/plum-bandeau-bodycon-midi-dress.jpg')} />  */}
     
    <View style={{flex:1}}>
    <ImageBackground source={{uri: 'https://i.ibb.co/wzQdFWX/Flower-Dress.webp'}} style={{width:wp('100%'), height:hp('93%')}}> 
      <View style={{justifyContent:'flex-end'}}>
        <View style={{alignItems:'center',
                      justifyContent:'center',
                      height:hp("85%") }}>
          <Text style={{fontSize:90, fontWeight:'bold', textDecorationLine:'underline',color:'white'}}>Trendz </Text>
          <Text style={{fontSize:22, color:'white'}}>Online Store</Text>
        </View>
      </View>
      

    <View style={{flexDirection:'row'}}> 
      <View style={{flex:1, justifyContent:'space-between', paddingRight:20}}>
      <TouchableOpacity onPress={
        ()=>{
        this.props.navigation.navigate('Register')
        }
      }>
        <View  style={{width:wp("45%"),
                      paddingTop:10,
                      paddingBottom:10,
                      backgroundColor:'#009eff',
                      color:'white', 
                      borderRadius:10,
                      flexDirection:'row',
                      alignItems:'right'}}>

            <View style={{paddingLeft:10,
                          paddingRight:10}}>

              <Icon name="person-add" color="white" size={24}></Icon>
          </View>
          <View>
              <Text style={{color:'white',fontSize:18}}>REGISTER</Text>
          </View>
        </View>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'flex-end'}}>
            <View style={{flex:1}}>
              <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate("Home")
              }}>
                <View  style={{width:wp("40%"),
                              paddingTop:10,
                              paddingBottom:10,
                              backgroundColor:'#009eff',
                              color:'white', 
                              borderRadius:10,
                              flexDirection:'row',
                              paddingRight:20}}>

                    <View style={{paddingLeft:10,
                                  paddingRight:10}}>
                        <Icon name="log-in-outline" color="white" size={24}></Icon>
                    </View>
                  <View>
                      <Text style={{color:'white',fontSize:18, alignItems:'center'}}>LOGIN</Text>
                  </View>                  
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  </View>
</View>

)
}
}



export default Account;