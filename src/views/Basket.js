import React,{Component} from "react";
import {View,Text, TouchableOpacity} from "react-native";

import BasketItem from '../components/BasketItem';

import Icon from '@expo/vector-icons/Ionicons';

import BasketTotalList from "../components/BasketTotalList";

import {store,removeWholeCart} from '../components/redux_shop';
import {connect} from 'react-redux';

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
                        /*
                    <BasketItem id="100" imageUri="https://i.ibb.co/mtn642f/watch1.jpg" name="Men Watch1"
                    price="220" qty="1" color="black" size="M">
                    </BasketItem>
                    <BasketItem id="101" imageUri="https://i.ibb.co/MnW6Wq5/watch2.jpg" name="Men Watch2"
                    price="100" qty="1" color="pink" size="M"
                    ></BasketItem>
                    */

                            this.state.cartItems.map((item)=>{
                                return(
                                    <BasketItem id={item.id}
                                                imageUri={item.imageUri}
                                                name={item.name}
                                                price={item.priceOne}
                                                qty={item.qty}>
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
                                <Text style={{color:'white',fontSize:18}}>Place your order</Text>
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

//export default Basket;

export default connect(mapStateToProps,mapDispatchToProps)(Basket);