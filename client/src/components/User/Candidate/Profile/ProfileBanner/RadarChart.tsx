import {
  Chart,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler,
  ChartOptions,
  ChartData,
} from "chart.js";

import { Radar } from "react-chartjs-2";
import { useScreenWidth } from "../../../../../util/customHooks";

Chart.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler,
);

const truncateText = (skill: string, maxLength: number) => {
  return skill.length > maxLength ? skill.slice(0, maxLength) + "..." : skill;
};

const tempPrimarySkill = truncateText("user experience design", 12);
const tempSecondarySkill = truncateText("dbms", 12);

// const handlePointLabelClick = (event, chart) => {
//   const activePoint = chart.getElementAtEvent(event)[0];
//   if (activePoint) {
//     // Execute your function when a point label is clicked
//     // For example, you can log the label text
//     const labelText = chart.data.labels[activePoint.index];
//     console.log("Point label clicked:", labelText);
//   }
// };

const RadarChart = () => {
  const screenWidth = useScreenWidth();

  const data: ChartData<"radar"> = {
    labels: [
      "Communication",
      "Personality",
      ["Secondary Skill", `(${tempSecondarySkill})`],
      ["Primary Skill", `(${tempPrimarySkill})`],
      ["Critical", "Thinking"],
    ],
    datasets: [
      {
        label: "Self Rating",
        data: [3, 3, 4, 3, 5],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        pointRadius: 2.5,
      },
      {
        label: "Interviewer's Rating",
        data: [2, 3, 3, 5, 4],
        // data: [null, null, null, null, null], initially
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        pointRadius: 2.5,
      },
    ],
  };

  const options: ChartOptions<"radar"> = {
    scales: {
      r: {
        beginAtZero: true,
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1,
        },

        pointLabels: {
          font: {
            size: screenWidth < 500 ? 10 : 11,
            weight: 400,
          },
          color: "#484848",
        },
      },
    },
    plugins: {
      legend: {
        // display: false,
        position: screenWidth < 900 ? "bottom" : "top",
        // onclick: handlePointLabelClick, not working
        labels: {
          boxWidth: 14,
          boxHeight: 9,
          color: "#09090b",

          font: {
            size: 12,

            weight: 500,
          },
        },
      },
    },
  };

  return (
    <div className="mt-6 flex h-[250px] w-[250px] items-center justify-center sm:h-[300px] sm:w-[300px] min-[1024px]:mt-0">
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
