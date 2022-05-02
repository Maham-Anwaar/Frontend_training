export const increment = (name) => {
    return {
        type: 'INCREMENT_COUNT',
        payload: {
            name: name
        }
    }
}

export const decrement = (name) => {
    return {
        type: 'DECREMENT_COUNT',
        payload: {
            name: name
        }
    }
}

export const addObjectToList = (name, price, amount=1) => {
    return {
        type: 'ADD_OBJ_TO_LIST',
        payload: {
            name: name,
            price: price,
            amount: amount
        }
    }
}
