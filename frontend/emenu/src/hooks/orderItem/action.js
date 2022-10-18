import actionTypes from './types';

export const setAppTheme = (theme) => {
    return { type: actionTypes.SET_APP_THEME, data: theme };
}

export const setItemData = (itemdata) => {
    return {type:actionTypes.SET_ITEMS,data:itemdata}
}

export const setAppLanguage = (language) => {
    return { type: actionTypes.SET_APP_LANGUAGE, data: language };
}

export const setAppLoading = (loading) => {
    return { type: actionTypes.SET_APP_LOADING, data: loading };
}

export const setAppToast = (data) => {
    return { type: actionTypes.SET_APP_TOAST, data: data };
}