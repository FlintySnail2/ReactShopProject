import React,{Component} from "react";
import {View,Text} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from '@expo/vector-icons/Ionicons';
import { ImageBackground, Touchable } from "react-native-web";
class Register extends Component{
    render(){
        return(
            <View>
                <ImageBackground source={{uri:'https://i.ibb.co/WcRHSwg/mermaid-Dress.webp'}} style={{width:wp('100%'), height:hp('93%')}}>
                <View style={{flex:1}}>
                    
                    <View style={{paddingTop: 20, paddingLeft:20, paddingRight:20}}>  
                        <TextInput  
                            style={{height: 40,backgroundColor: 'white', fontSize: 20}}  
                            placeholder="Name"  
                            onChangeText={(text) => this.setState({text})}  
                        />  
                        <Text style={{padding: 10, fontSize: 50}}/>  
                    </View>

                    <View style={{paddingTop: 1, paddingLeft:20, paddingRight:20}}>  
                    <TextInput  
                        style={{height: 40,backgroundColor: 'white', fontSize: 20}}  
                        placeholder="Email Address"  
                        onChangeText={(text) => this.setState({text})}  
                    />  
                    <Text style={{padding: 10, fontSize: 50}}/>  
                    </View>

                    <View style={{paddingTop: 1, paddingLeft:20, paddingRight:20}}>  
                    <TextInput  
                        style={{height: 40,backgroundColor: 'white', fontSize: 20}}  
                        placeholder="Password"  
                        onChangeText={(text) => this.setState({text})}  
                    />  
                    <Text style={{padding: 10, fontSize: 50}}/>  
                </View>
            </View>
            <View style={{flex:3}}>
                <View style={{alignItems:'center',
                                justifyContent:'center',
                                height:hp("65%") }}>
                </View>
            </View>
            <View style={{flex:3, height:hp("50%"),justifyContent:'flex-end', paddingBottom:20}}>
                <View style={{flexDirection:'row',alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>{ this.props.navigation.navigate("Home")}}>
                        <View  style={{width:wp("85%"),                            
                                    paddingTop:10,
                                    paddingBottom:10,
                                    paddingRight:20,
                                    paddingLeft:20,
                                    backgroundColor:'#009eff',
                                    color:'white', 
                                    borderRadius:2,
                                    flexDirection:'row',
                                    alignItems:'center',
                                    borderRadius:'10px'}}>

                            <View style={{paddingLeft:10,
                                        paddingRight:10}}>
                                <Icon name="log-in-outline" color="white" size={24}></Icon>
                            </View>
                        <View>
                            <Text style={{color:'white',fontSize:18, alignItems:'center'}}>COMPLETE REGISTRATION</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        </ImageBackground>
    </View>
        
        )
    }
}

export default Register;