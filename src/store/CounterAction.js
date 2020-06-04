export const actionIncrement  = () => {
    return {type: 'INCREMENT'}
}

export const actionDecrement = () => {
    return {type: 'DECREMENT'}
}

export const actionStoreResult = (val) => {
    return {type: 'STORE_RESULT', counter: val}
}

export const saveResult = (val) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            if(getState().ctr.counter > 5){
                dispatch(actionStoreResult(val))
            }
        }, 2000)
    }
}

export const actionDeleteResult = (id) => {
    return {type: 'DELETE_RESULT', id: id}
}