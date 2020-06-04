const initialState = {
    results: []
}

const resultReducer = (state = initialState, action) => {
    switch(action.type){
        case 'STORE_RESULT':
            const entry = {
                id: Math.random(),
                val: action.counter
            }
            return {
                ...state,
                results: state.results.concat(entry)
            }
        case 'DELETE_RESULT':
            return {
                ...state,
                results: state.results.filter((data) => (data.id !== action.id))
            }
        default:
            return state;
    }
}

export default resultReducer;