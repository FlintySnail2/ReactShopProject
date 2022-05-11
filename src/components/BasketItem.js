import React,{Component} from "react";
import {View,Text,Image} from "react-native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class BasketItem extends Component{

    constructor(props){
        super(props);

        this.state={
            id:props.id,
            imageUri:props.imageUri,
            name:props.name,
            price:props.price,
            qty:props.qty,
            color:props.color,
            size:props.size
        }
    }
    render(){
        return(
            <View style={{height: hp("20%"), width:wp("100%"), backgroundColor:'white', 
            flexDirection:'row',marginBottom:10}}>
               <View style={{width:wp("25%"), height:hp("18%"),paddingTop:10}}>
                    <Image source={{uri:this.state.imageUri}} style={{flex:1, resizeMode:'contain'}}></Image>
               </View>
               <View style={{width:wp("70%"), flexDirection:'row',justifyContent:'space-around',
               alignItems:'center'}}>
                     <View>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>{this.state.name}</Text>
                        <Text style={{fontSize:15}}>color:{this.state.color}</Text>
                        <Text style={{fontSize:15}}>size:{this.state.size}</Text>
                        <Text style={{fontSize:15}}>Quantity:{this.state.qty}</Text>
                     </View>
                     <View>
                        <Text style={{fontSize:24,fontWeight:'bold'}}>${this.state.price}</Text>
                     </View>
               </View>
            </View>
        )
    }
}

export default BasketItem;