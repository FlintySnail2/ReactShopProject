import {createStore} from 'redux';
import {connect} from 'react-redux'
//import {}
//We Have four things

//1. Created Actions
const ADD_TODO='ADD_TODO';
const REMOVE_TODO='REMOVE_TODO'


//2. Actions Create which returns action object
export const addToDo=(todo)=>{
    return{
        type:ADD_TODO,
        todo
    }
}

export const removeTodo=(todo)=>{
    return{
        type:REMOVE_TODO,
        todo
    }
}

//3. Reducer - Functions which takes state array and action as parameter
//and based on this action it changes the state.


//REDUCER ' todos' returns the state
const todos=(state=[],action)=>{
    switch(action.type){
        case ADD_TODO:
            return[
                //HERE CODE TO ADD ITEM
                ...state,action.todo
            ]
        break;
            //STATE IS A CURRENT ARRAY THAT STORES EACH OBJECT
        case REMOVE_TODO:
            return state.filter((currentToDo)=>{
                return currentToDo!=action.todo
            })
            //HERE CODE TO REMOVE ITEM
        break;
        default:
            return state;
    }
}

//4. EXPORT STORE
export const store=createStore(todos);
//REDUX TOOLKIT + CREATE STORE