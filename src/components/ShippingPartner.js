import React,{Component} from "react";
import {View,Text,Image} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class ShippingPartner extends Component{
    render(){
        const {imageUri,name,description}=this.props;
        return(
            <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center',
            marginBottom:20}}>

                <View>
                     <Image source={{uri:imageUri}} style={{width:wp("20%"),height:hp("10%"),resizeMode:'contain'}}/>
                </View>
                <View>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>{name}</Text>
                    <Text style={{fontSize:12,color:'gray'}}>{description}</Text>
                </View>
              
            </View>
        )
    }
}

export default ShippingPartner;