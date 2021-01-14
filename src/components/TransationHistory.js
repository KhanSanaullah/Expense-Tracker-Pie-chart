import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransationHistory = () => {
  const { transaction } = useContext(GlobalContext);

  return (
    <div className="scrolbar">
      <h3>History</h3>
      <ul className="list">
        {transaction.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
