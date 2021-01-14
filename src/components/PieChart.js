import React, { useContext } from "react";
import { Pie, defaults } from "react-chartjs-2";
import { GlobalContext } from "../context/GlobalState";
defaults.global.tooltips.enabled = false;
defaults.global.legend.position = "bottom";

export const PieChart = () => {
  const { chart, transaction } = useContext(GlobalContext);

  const amounts = transaction.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);
  const expance =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  chart[0].value = income;
  chart[1].value = expance;

  const data = chart.map((chart) => chart.value);
  const labels = chart.map((chart) => chart.name);

  return (
    <div>
      <Pie
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: [
                "rgba(75, 192, 192, 0.2)",
                "rgba(255, 99, 132, 0.2)",
              ],
              borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
      />
    </div>
  );
};
