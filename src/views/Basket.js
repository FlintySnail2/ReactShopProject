import React,{Component} from "react";
import {View,Text} from "react-native";

import BasketItem from '../components/BasketItem';

import Icon from '@expo/vector-icons/Ionicons';

import BasketTotalList from "../components/BasketTotalList";

class Basket extends Component{
    render(){
        return(
            <View>
                <View>
                    <BasketItem id="100" imageUri="https://i.ibb.co/mtn642f/watch1.jpg" name="Men Watch1"
                    price="220" qty="1" color="black" size="M">
                    </BasketItem>
                    <BasketItem id="101" imageUri="https://i.ibb.co/MnW6Wq5/watch2.jpg" name="Men Watch2"
                    price="100" qty="1" color="pink" size="M"
                    ></BasketItem>
              </View>
              <View>
                  <View style={{paddingLeft:10,paddingRight:10}}>
                    <View  style={{paddingTop:10,paddingBottom:10,backgroundColor:'black',
                    color:'white',
                    borderRadius:2,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <View style={{paddingLeft:10,paddingRight:10}}>
                            <Icon name="md-cart" color="white" size={24}></Icon>
                        </View>
                        <View>
                            <Text style={{color:'white',fontSize:18}}>Remove Cart</Text>
                        </View>
                    </View>
                  </View>
                  <View style={{marginTop:10,marginBottom:10}}>
                    <BasketTotalList label="Shipping" price="0"></BasketTotalList>
                    <BasketTotalList label="Total Cost" price="320"></BasketTotalList>
                  </View>

                  <View style={{paddingLeft:10,paddingRight:10}}>
                    <View  style={{paddingTop:10,paddingBottom:10,backgroundColor:'black',
                        color:'white',
                        borderRadius:2,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                            <View style={{paddingLeft:10,paddingRight:10}}>
                                <Icon name="md-cart" color="white" size={24}></Icon>
                            </View>
                            <View>
                                <Text style={{color:'white',fontSize:18}}>Place your order</Text>
                            </View>
                        </View>
                  </View>
              </View>

            </View>
        )
    }
}

export default Basket;