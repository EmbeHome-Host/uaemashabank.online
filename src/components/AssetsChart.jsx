import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const AssetsChart = () => {
  const data = {
    labels: ['PKR-assets 80%', 'liabilities 20%'],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ['#003329', '#D49E55'],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    cutout: '55%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: { family: 'Inter', size: 12, weight: '500' },
          color: '#333333',
          padding: 16,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        backgroundColor: '#003329',
        titleFont: { family: 'Inter' },
        bodyFont: { family: 'Inter' },
      },
    },
  };

  return (
    <div className="assets-chart">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default AssetsChart;
