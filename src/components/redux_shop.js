import {createStore} from 'redux';

//Actions
const ADD_TO_CART='ADD_TO_CART';
const REMOVE_FROM_CART='REMOVE_FROM_CART';
const REMOVE_WHOLE_CART="REMOVE_WHOLE_CART";

//Action Creators
export const addToCart=(item)=>{
    return{
        type:ADD_TO_CART,
        item
    }
}

export const  removeWholeCart=(item)=>{
    return{
        type:REMOVE_WHOLE_CART,
            item
    }
}

var initialState={
    cartItems:[],
    orderTotal:0
}

//Create a reducer
var shop = (state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            //add code to add the item into the cart
            console.log('Add')
            console.log(action.item)

            //CHECKING IF THE ITEM EXISTS IN THE CART
            var isExists=state.cartItems.some((cartItems=>{
                return cartItems.id==action.item.id
            }))

            //IF THE ITEMS EXISTS INCREASE QUANTITY BY ONE

            if(isExists){
                
                var quantity=action.item.qty;
                action.item.qty=quantity+1;
            }
            else{
                action.item.qty=1;
            }
            return{
                cartItems:[
                    ...state.cartItems.filter((cartItems)=>{
                        return cartItems.id!=action.item.id
                    }),action.item
                ],
                orderTotal:
                state.cartItems.filter((cartItems)=>{
                    return cartItems.id!=action.item.id
                }).reduce((total,cartItems)=>{
                    return total+cartItems.priceOne*cartItems.qty
                },0)+action.item.priceOne*action.item.qty
            }

            //IF THE ITEM DOESN'T EXIST HAS TO BE ADDED BY CART ITEMS ARRAY
           
            break;

        case REMOVE_WHOLE_CART:
            console.log("derp")
        //Add code to remove the item from the cart
        return Object.assign({},state,{
            cartItems:[],
            orderTotal:0
        })
            break;
            
        default:
            return state;
    }
}

//Export store
export const store=createStore(shop);