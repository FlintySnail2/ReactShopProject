import React,{Component} from "react";
import {View,Text, TouchableOpacity, Button} from "react-native";
import BasketItem from '../components/BasketItem';
import Icon from '@expo/vector-icons/Ionicons';
import BasketTotalList from "../components/BasketTotalList";
import {store,removeWholeCart,removeFromCart} from '../components/redux_shop';
import {connect} from 'react-redux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { NavigationContainer } from "@react-navigation/native";


class Basket extends Component{

    constructor(props){
        super(props);
        this.state={
            cartItems:props.cartItems,
            orderTotal:props.orderTotal
        }
    }

    componentDidUpdate(){
        if(this.state.cartItems && (this.state.cartItems.length!=this.props.length)){
            this.setState({
                cartItems:store.cartItems,
                orderTotal:store.orderTotal
            })
        }
    }


    render(){
        if(this.state.cartItems && this.state.cartItems.length){
        
        return(
            <View>
                <View>
                    {
                        
                            this.state.cartItems.map((item)=>{
                                return(
                                    <BasketItem id={item.id}
                                                imageUri={item.imageUri}
                                                name={item.name}
                                                
                                                price={item.priceOne}
                                                qty={item.qty}>
                                               <View style={{width:80, height:40}} onPress={()=> this.props.onPress(item)}/>
                                    </BasketItem>
                                  
                                )
                                
                            })

                   }   
              </View>
            <View>
                  <View style={{paddingLeft:10,paddingRight:10}}>
                  <TouchableOpacity onPress={()=>this.props.removeWholeCart()}>
                    <View  style={{paddingTop:10,paddingBottom:10,backgroundColor:'black',
                    color:'white',borderRadius:2,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>

                        
                            <View style={{paddingLeft:10,paddingRight:10}}>
                                <Icon name="md-cart" color="white" size={24}></Icon>
                            </View>
                            <View>
                                <Text style={{color:'white',fontSize:18}}>Remove Cart</Text>
                            </View>
                        
                    </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{marginTop:10,marginBottom:10}}>
                    <BasketTotalList label="Shipping" price="0"></BasketTotalList>
                    <BasketTotalList label="Total Cost" price={this.state.orderTotal}></BasketTotalList>
                  </View>

                  <View style={{paddingLeft:10,paddingRight:10}}>
                    <View  style={{paddingTop:10,paddingBottom:10,backgroundColor:'black',
                        color:'white',
                        borderRadius:2,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                            <View style={{paddingLeft:10,paddingRight:10}}>
                                <Icon name="md-cart" color="white" size={24}></Icon>
                            </View>
                            <View>
                                <Text style={{color:'white',fontSize:18}} onPress={()=> this.props.navigation.navigate('Home')} >Place your order</Text>
                            </View>
                        </View>
                  </View>
              </View>
            </View>
        )
    }
    else{
        return(
            <View style={{flex:1, alignItems:'center',justifyContent:'center',padding:10}}>
                <Text style={{fontSize:18, fontWeight:'bold'}}> 
                    No Items are currently in the basket, please return to the online store
                </Text>

            </View>
        )
    }
}
}

var mapStateToProps=(state)=>{
    return{
        cartItems:state.cartItems,
        orderTotal:state.orderTotal
    }
}
var mapDispatchToProps={
    removeWholeCart
}

// var mapDispatchToProps = (state)=>{
//     return{
//         removeFromCart:(cartItems)=>dispatch({type:'REMOVE_FROM_CART',item:id
//     })
//     }
// }

//export default Basket;

export default connect(mapStateToProps,mapDispatchToProps)(Basket);