import { createStore } from 'redux';

let initialState = [
    {
        id: 1,
        itemName: "Chicken Lollipop",
        description: "Deep fried chicken and crispy",
        cost: 120,
        quantity: 0
    },
    {
        id: 2,
        itemName: "Panner Lollipop",
        description: "Deep fried panner and crispy",
        cost: 100,
        quantity: 0
    },
    {
        id: 3,
        itemName: "Chicken Popcorn",
        description: "6 pieces of chicken in a plate",
        cost: 150,
        quantity: 0
    },
    {
        id: 4,
        itemName: "Panner Popcorn",
        description: "6 pieces of panner in a plate",
        cost: 130,
        quantity: 0
    },
    {
        id: 5,
        itemName: "Dragon chicken",
        description: "Toasted chicken in sweet sauce",
        cost: 200,
        quantity: 0
    },
    {
        id: 6,
        itemName: "Dragon panner",
        description: "Toasted panner in sweet sauce",
        cost: 170,
        quantity: 0
    }
];
const foodList = (state = initialState, action) => {
    let newData = null;
    switch (action.type) {
        case "ON_ITEM_ADD":
            newData = state.map((d, i) => {
                if (d.id === action.id) {
                    let newValue = d.quantity + 1;
                    d.quantity = newValue < 21 ? newValue : d.quantity;
                }
                return d;
            })
            return newData;
        case "ON_ITEM_REMOVE":
            newData = state.map((d, i) => {
                if (d.id === action.id) {
                    let newValue = d.quantity - 1;
                    d.quantity = newValue < 0 ? 0 : newValue;
                }
                return d;
            })
            return newData;
        case "ON_RESET":
            newData = state.map((d, i) => {
                d.quantity = 0
                return d;
            })
            return newData;
        default:
            return state
    }
}

const store = createStore(foodList)

export default store;