import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

    const [users, setUsers] = useState([]);

    return <GlobalContext.Provider 
    value={{
        users,
        setUsers
    }}
    >
        {children}
    </GlobalContext.Provider>;
};