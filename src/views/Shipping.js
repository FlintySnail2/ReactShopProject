import React,{Component} from "react";
import {View,Text} from "react-native";

import ShippingPartner from '../components/ShippingPartner';


class Shipping extends Component{
    render(){
        return(
            <View style={{padding:20}}>
               <Text style={{fontSize:20,paddingBottom:20}}>The following shipping partners are used:-</Text>
               <ShippingPartner imageUri="https://i.ibb.co/n1yDNxg/logo-1.jpg" 
               name="DHL" description="No additional costs using DHL"></ShippingPartner>
               <ShippingPartner imageUri="https://i.ibb.co/j5JyXsG/logo-2.jpg"
               name="UPS" description="No additional costs using UPS"></ShippingPartner>
               <ShippingPartner imageUri="https://i.ibb.co/SwTjq2Q/logo-3.png"
               name="FedEX" description="No additional costs using FedEx"></ShippingPartner>
            </View>
        )
    }
}

export default Shipping;