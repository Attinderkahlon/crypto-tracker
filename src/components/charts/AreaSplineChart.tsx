import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

type Props = {
  labels: any;
  data: number[];
};

const AreaSplineChart = ({ labels, data }: Props) => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Price Change History",
      },
    },
  };

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Price",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: data,
      },
    ],
  };

  return <Line options={options} data={chartData} />;
};

export default AreaSplineChart;
