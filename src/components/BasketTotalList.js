import React,{Component} from "react";
import {View,Text} from "react-native";

class BasketTotalList extends Component{
    
    render(){

        const {label,price}=this.props;
        return(
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',
            padding:10,borderTopColor:'gray', borderTopWidth:3}}>
              <Text style={{fontWeight:'bold',fontSize:16}}>{label}</Text>
              <Text style={{fontWeight:'bold',fontSize:16}}>${price}</Text>
            </View>
        )
    }
}

export default BasketTotalList;