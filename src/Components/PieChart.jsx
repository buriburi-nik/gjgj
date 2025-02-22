import { Pie } from "react-chartjs-2";
import PropTypes from "prop-types";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
function PieChart({ chartData }) {
  return (
    <div className="piechart-container">
      <Pie data={chartData} />
    </div>
  );
}

export default PieChart;
PieChart.propTypes = {
  chartData: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string),
    datasets: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        data: PropTypes.arrayOf(PropTypes.number),
        backgroundColor: PropTypes.arrayOf(PropTypes.string),
        borderWidth: PropTypes.number,
      })
    ),
  }).isRequired,
};