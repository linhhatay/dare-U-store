const initialState = false;

const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CALL_API_START':
            return true;
        case 'CALL_API_END':
            return false;
        default:
            return state;
    }
};

export default loadingReducer;
