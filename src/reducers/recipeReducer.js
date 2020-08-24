const INITIAL_STATE = {
    id: null,
    recipe: null
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'SELECT_RECIPE':
            return {...state, id: action.payload};
        case 'FETCH_RECIPE':
            return {...state, recipe: action.payload};
        default:
            return state;
    }
    
};
