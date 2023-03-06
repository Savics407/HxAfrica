import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Bar, Line } from "react-chartjs-2";
// import { Chart as chartjs } from "chart.js/auto";

function BarChart() {
  const data = [];

  const [userData, setUserData] = useState({
    labels: [
      "2 Aug",
      "3 Aug",
      "4 Aug",
      "5 Aug",
      "6 Aug",
      "7 Aug",
      "8 Aug",
      "9 Aug",
    ],
    datasets: [
      {
        label: "Investments",
        data: [100, 200, 100, 400, 100, 200, 200, 300],
        backgroundColor: "#288AF0",
        borderColor: "#288AF0",
        borderWidth: 2,
      },
      {
        label: "Relisted Investments",
        data: [100, 200, 100, 200, 100, 300, 200, 100],
        backgroundColor: "#FF7171",
        borderColor: "#FF7171",
        borderWidth: 1,
      },
    ],
  });
  return (
    <>
      <div className="rounded-lg bg-white mt-2 px-5 mb-3 pb-4">
        <div className="border-b border-stroke py-5 text-sm text-darker font-medium flex justify-between items-center cursor-pointer">
          <h1 className="">Investment Analysis</h1>
          <h1 className="text-footer text-xs flex items-center font-normal">
            This month <FaAngleDown className="ml-2 text-angle text-sm" />
          </h1>
        </div>
        <div className="h-60">
          <Line
            data={userData}
            options={{
              maintainAspectRatio: false,
              tension: 0.5,
              scales: {
                x: {
                  grid: {
                    color: "transparent",
                  },
                },
                y: {
                  grid: {
                    drawBorder: false, // <-- this removes y-axis line
                    lineWidth: 0.5,
                  },
                  ticks: {
                    display: false,
                  },
                },
              },
              elements: {
                point: {
                  radius: 1,
                },
              },
              plugins: {
                legend: {
                  labels: {
                    font: { size: 10 },
                    color: "#1E1E1E",
                    boxWidth: 12,
                  },
                  align: "end",
                },
                tooltip: {
                  backgroundColor: "#1E1E1E",
                  bodyColor: "#FFFFFF",
                  bodyFontSize: 5,
                  // titleColor: "#0B101D",
                  titleFont: "bold",
                  titleFontSize: 6,
                  multiKeyBackground: "#1E1E1E",
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
}

export default BarChart;
