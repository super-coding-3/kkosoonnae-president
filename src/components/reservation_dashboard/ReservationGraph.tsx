import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ReservationGraph {
  month: string;
  count: number;
}

interface ReservationGraphProps {
  graphInfo: ReservationGraph[];
}

const ReservationGraph: React.FC<ReservationGraphProps> = ({ graphInfo }) => {
  const data = {
    labels: graphInfo.map((data) => data.month),
    datasets: [
      {
        label: "예약건수",
        data: graphInfo.map((data) => data.count),
        borderColor: "#492D28",
        backgroundColor: "#492D28",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        align: "end" as const,
        labels: {
          boxWidth: 10,
          color: "black" as const,
        },
      },
      title: {
        display: true,
        text: "최근 6개월 예약 증감현황",
        color: "#000",
        font: {
          size: 18,
        },
        padding: {
          bottom: 20,
        },
      },
    },
    layout: {
      padding: {
        top: 27,
        right: 27,
        bottom: 0,
        left: 27,
      },
    },
  };

  return (
    <div className="w-2/3 border border-COMMONN_BORDER_GRAY rounded-md">
      <Line data={data} options={options} />
    </div>
  );
};

export default ReservationGraph;
