const initialState = {
    items: [],
    total: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingIndex = state.items.findIndex((item) => item.id === action.payload.id);

            if (existingIndex !== -1) {
                const existingItem = state.items[existingIndex];
                const updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity + 1,
                    // price: existingItem.price + action.payload.price,
                };
                const updatedItems = [
                    ...state.items.slice(0, existingIndex),
                    updatedItem,
                    ...state.items.slice(existingIndex + 1),
                ];
                return {
                    ...state,
                    items: updatedItems,
                    total: state.total + action.payload.price,
                };
            } else {
                const newItem = {
                    ...action.payload,
                    quantity: 1,
                    price: action.payload.price,
                };
                return {
                    ...state,
                    items: [...state.items, newItem],
                    total: state.total + action.payload.price,
                };
            }
        case 'REMOVE_FROM_CART':
            const updatedItems = state.items.filter((item) => item.id !== action.payload.id);
            return {
                ...state,
                items: updatedItems,
                total: state.total - action.payload.price,
            };
        case 'UPDATE_QUANTITY':
            const updatedCart = state.items.map((item) =>
                item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item,
            );
            const newTotal = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
            return {
                ...state,
                items: updatedCart,
                total: newTotal,
            };
        default:
            return state;
    }
};

export default cartReducer;
