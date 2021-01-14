import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transaction: [],
  chart: [
    { name: "Income", value: 1 },
    { name: "Expense", value: 1 },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransation(id) {
    dispatch({
      type: "DELETE_Transaction",
      payload: id,
    });
  }
  function addTransation(transaction) {
    dispatch({
      type: "Add_Transaction",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transaction: state.transaction,
        chart: state.chart,
        deleteTransation,
        addTransation,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
