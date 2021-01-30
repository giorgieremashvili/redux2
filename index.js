const redux = require("redux");

// CONSTANTS
const BUY_APPLE = "BUY_APPLE";
const BUY_BANANA = "BUY_BANANA";
const BUY_PINEAPLE = "BUY_PINEAPLE"
const BUY_PEAR = "BUY_PEAR"
const BUY_MANGO = "BUY_MANGO"

// ACTIONS
const buyApple = () => {
    return {
        type: BUY_APPLE
    }
}

const buyBanana = () => {
    return {
        type: BUY_BANANA
    }
}

const buyPineaple = () => {
    return{
        type: BUY_PINEAPLE
    }
}

const buyPear = () => {
    return{
        type: BUY_PEAR
    }
}

const buyMango = () => {
    return{
        type: BUY_MANGO
    }
}


// INITIAL STATE
const initialState = {
    numberOfApples: 5,
    numberOfBananas: 10,
    numberOfPineaple: 5,
    numberOfPear: 10,
    numberOfMango: 5
}

// REDUCER
const Reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_APPLE: 
        if(state.numberOfApples == 0){
            console.log("არ არის მარაგში");
        }else{      
        return {
            ...state,
            numberOfApples: state.numberOfApples - 1
        }
    }
        case BUY_BANANA: return {
            ...state,
            numberOfBananas: state.numberOfBananas - 1
        }
        case BUY_PINEAPLE: return{
            ...state,
            numberOfPineaple: state.numberOfPineaple -1
        }
        case BUY_PEAR: return{
            ...state,
            numberOfPear: state.numberOfPear -1
        }
        case BUY_MANGO: return{
            ...state,
            numberOfMango: state.numberOfMango -1 
        }
         
        default: return state
    } 
}


// CREATE STORE
const store = redux.createStore(Reducer);

// LOGGS
console.log(store.getState());

// ვაშლის ყიდვა - მოქმედების გამოძახება
console.log(store.dispatch(buyApple()));
console.log(store.dispatch(buyApple()));
// ბანანის ყიდვა - მოქმედების გამოძახება
console.log(store.dispatch(buyBanana()))
console.log(store.dispatch(buyBanana()))
console.log(store.dispatch(buyBanana()))
// ანანასის ყიდვა - მოქმედების გამოძახება
console.log(store.dispatch(buyPineaple()))
console.log(store.dispatch(buyPineaple()))
console.log(store.dispatch(buyPineaple()))
console.log(store.dispatch(buyPineaple()))
// მსხლის ყიდვა - მოქმედების გამოძახება
console.log(store.dispatch(buyPear()))
console.log(store.dispatch(buyPear()))
console.log(store.dispatch(buyPear()))
// მანგოს ყიდვა - მოქმედების გამოძახება
console.log(store.dispatch(buyMango()))
console.log(store.dispatch(buyMango()))


console.log(store.getState());
