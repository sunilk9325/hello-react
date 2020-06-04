const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware dispatching] ', action)
            next(action)
        }
    }
}

export default logger