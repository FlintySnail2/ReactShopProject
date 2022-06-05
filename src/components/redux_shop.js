import {createStore} from 'redux';

//actions
const ADD_TO_CART='ADD_TO_CART';
const REMOVE_FROM_CART='REMOVE_FROM_CART';
const REMOVE_WHOLE_CART='REMOVE_WHOLE_CART';

//action creators
export const addToCart=(item)=>{
    return{
        type:ADD_TO_CART,
        item
    }
}

export const removeWholeCart=(item)=>{
    return{
        type:REMOVE_WHOLE_CART,
        item
    }
}

export const removeFromCart=(item)=>{
    return{
        type:REMOVE_FROM_CART,
        item
    }
}

var initialState={
    cartItems:[],
    orderTotal:0
}

//create reducer
var shop=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            //add code to add the item into the cart
           console.log('add item to cart');
           console.log(action.item);

           //CHECKING IF THE ITEM WHICH IS GOING TO BE ADDED EXISTS IN THE CART.

           var isItemExists=state.cartItems.some((cartItem=>{
               return cartItem.id==action.item.id
           }));

           console.log(isItemExists);

           if(isItemExists){

               console.log("inside is item exists");
               var quantity=action.item.qty;
               action.item.qty=quantity+1;
           }
           else{
            console.log("inside else  item exists");
               action.item.qty=1;
           }
           console.log("action item"+action.item);

           return{

            cartItems:[
                   ...state.cartItems.filter((cartItem)=>{
                       return cartItem.id!=action.item.id
                   }),action.item
               ],
               orderTotal:
                   state.cartItems.filter((cartItem)=>{
                       return cartItem.id!=action.item.id
                   }).reduce((total,cartItem)=>{
                       return total+cartItem.priceOne*cartItem.qty
                   },0)+action.item.priceOne*action.item.qty
           }
           //IF THE ITEM DOES NOT EXIST  A CART ITEM IS ADDED INTO THE CART ITEMS ARRAY
        break;

        case REMOVE_FROM_CART:
        console.log(action.item.id);

        return{
            cartItems:[
                ...state.cartItems.filter((x)=> x.id !== action.item.id),
            ],
            orderTotal:
            state.cartItems.filter((cartItem)=>{
                return cartItem.id!=action.item.id
            }).reduce((total, cartItem)=>{
                return total + cartItem.priceOne * cartItem.qty
            }, 0) + action.item.priceOne * action.item.qty
        }

        break;

        case REMOVE_WHOLE_CART:
            //write code to remove whole cart
            console.log("remove whole cart");
                return Object.assign({},state,{
                    cartItems:[],
                    orderTotal:0
                })
        break;

        
         default:
            return state;
    }
}

//export store

export const store=createStore(shop);
