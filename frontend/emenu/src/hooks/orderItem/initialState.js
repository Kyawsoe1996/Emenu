const initialState = {
    appTheme: 'light',
    appLanguage: '',
    appLoading: true,
    items:[],
    toast: {
        label: "",
        message: "",
        visible: false,
        type: "info",
        action: () => { }
    }
};

export default initialState;

