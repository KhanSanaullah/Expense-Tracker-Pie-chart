import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransationHistory } from "./components/TransationHistory";
import { AddTransation } from "./components/AddTransation";
import { GlobalProvider } from "./context/GlobalState";
import { PieChart } from "./components/PieChart";
import "./App.css";

function App() {
  return (
    <div>
      <GlobalProvider>
        <div className="samerow">
          <PieChart />

          <div className="container">
            <Header />
            <Balance />
            <IncomeExpense />
            <TransationHistory />
            <AddTransation />
          </div>
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
