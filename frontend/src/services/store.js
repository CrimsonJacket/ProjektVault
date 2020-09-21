import React, { createContext, useReducer } from "react";

const initialState = {
    // set as true during development
    isAuthenticated: true,
};

const store = createContext();
const { Provider } = store;

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "login":
                return { ...state, isAuthenticated: true };
            case "logout":
                return { ...state, isAuthenticated: false };
            default:
                return state;
        }
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };