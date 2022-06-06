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
        type: REMOVE_FROM_CART,
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

           //checking if the item which we are going to add exists in the cart

           var isItemExists=state.cartItems.some((cartItem=>{
               return cartItem.id==action.item.id
           }));

           console.log(isItemExists);
           // if the item already exists- we just need to prevous quantity of than item by 1

           if(isItemExists){
               /*var item=state.cartItems.find((cartItem)=>{
                   return cartItem.id==action.item.id
               });*/
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


           //if the item does not exists- we have to add the item into cartItems array
            break;
        case REMOVE_WHOLE_CART:
            //write code to remove whole cart
            console.log("remove whole cart");
                return Object.assign({},state,{
                    cartItems:[],
                    orderTotal:0
                })
            break;

        case REMOVE_FROM_CART:
            console.log("REMOVE_FROM_CART"+action.item.id + JSON.stringify(action));
            console.log("REMOVE_FROM_CART2"+action.item.id + JSON.stringify(state.cartItems));
            return {
                cartItems:[
                                   ...state.cartItems.filter((cartItem)=> {
                return cartItem.id != action.item.id
                                   }),
                               ],
                               orderTotal:state.cartItems.filter((cartItem) =>{
                                return cartItem.id != action.item.id
                                               }).reduce((total, cartItem)=>{
                                return total + cartItem.priceOne + cartItem.qty
                }, 0)
            }
            break;

        default:
            return state;
    }
}

//export store

export const store=createStore(shop);