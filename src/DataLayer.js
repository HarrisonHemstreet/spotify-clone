from React, {createContext, useContext, useReducer} import 'react';

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => {
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
}