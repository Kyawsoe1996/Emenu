//types
import actionTypes from './types';

//initial state
import initialState from './initialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_APP_THEME:
            return {
                ...state,
                appTheme: action.data
            };
        case actionTypes.SET_ITEMS:
            return {
                ...state,
                items:action.data

            }
        case actionTypes.SET_APP_LANGUAGE:
            return {
                ...state,
                appLanguage: action.data
            };
        case actionTypes.SET_APP_LOADING:
            return {
                ...state,
                appLoading: action.data
            };
        case actionTypes.SET_APP_TOAST:
            return {
                ...state,
                toast: action.data
            };

        default:
            return state;
    }
}

export default reducer;