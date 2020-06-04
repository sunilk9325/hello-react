const initialState = {
    persons: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD':
            const newPerson = {
                id: Math.random(),
                name: action.name,
                age: action.age
            }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }
        case 'DELETE':
            return {
                ...state,
                persons: state.persons.filter((data) => (data.id !== action.id))
            }
        default:
            return state;
    }
}

export default rootReducer;