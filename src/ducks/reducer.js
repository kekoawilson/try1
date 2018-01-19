
const initialState = {
    reduxState: []
}

// 42E
const CHANGE_REDUX_STATE = 'CHANGE_REDUX_STATE'


// 43F

export function changeState(state) {
    return {
        type: CHANGE_REDUX_STATE,
        payload: state
    }
}

export default function(state = initialState, action) {

    switch (action.type) {
        case CHANGE_REDUX_STATE:
            return Object.assign( {}, state, { reduxState: action.payload } )
    
        default:
            return state;
    }
}

