import React,{Component} from "react";
import {View,Text, Image, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



class ProductItem extends Component{
    render(){
        const {id, imageUri,name,priceOne, priceTwo, onPress}=this.props;
        return(
            <TouchableOpacity onPress={onPress}>
                <View style={{width:"42%",  marginTop:10, marginLeft:"5", marginRight:"5", paddingLeft:10}}>
                    <View style={{width:wp("45%"), height:wp("50%"), paddingLeft:15 }}>
                        <Image source={{uri:imageUri}} style={{flex:1}}/>   
                    </View>

                <Text style={{fontSize:18, fontWeight:'bold', paddingLeft:10}}>
                    {name}

                </Text>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={{fontSize:14, fontWeight:'bold', paddingLeft:10}}>${priceOne}</Text>
                    <Text style={{fontSize:14,paddingLeft:10, textDecorationLine:"line-through"}}>{priceTwo}</Text>

                </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default ProductItem;