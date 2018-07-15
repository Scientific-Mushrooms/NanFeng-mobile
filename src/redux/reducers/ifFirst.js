export default ifFirst = (state = {}, action) => {
    
    switch (action.type) {
        case 'isFirst':
            return { ...state, first: true };
        case 'notFirst':
            return { ...state, first: false };
        default:
            return state;
    }
}