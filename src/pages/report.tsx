import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Insurance {
  _id: string;
  Nume: string;
  Prenume: string;
  CNP: number;
  DataInceput: Date;
  PretAsigurare: number;
}

const Reports: React.FC = () => {
  const [insurances, setInsurances] = useState<Insurance[]>([]);

  useEffect(() => {
    const fetchInsurances = async () => {
      try {
        const response = await fetch('https://ritasig.ddnsking.com/api/insurances');
        const data = await response.json();
        setInsurances(data);
      } catch (error) {
        console.error('Failed to fetch insurances:', error);
      }
    };

    fetchInsurances();
  }, []);

  const getMonthlyData = () => {
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const currentYear = new Date().getFullYear();

    const monthlyCounts = months.map(month => {
      return insurances.filter(insurance => {
        const date = new Date(insurance.DataInceput);
        return date.getFullYear() === currentYear && date.getMonth() + 1 === month;
      }).length;
    });

    const monthlySums = months.map(month => {
      return insurances.filter(insurance => {
        const date = new Date(insurance.DataInceput);
        return date.getFullYear() === currentYear && date.getMonth() + 1 === month;
      }).reduce((sum, insurance) => sum + insurance.PretAsigurare, 0);
    });

    return { monthlyCounts, monthlySums };
  };

  const { monthlyCounts, monthlySums } = getMonthlyData();

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Numărul de asigurări',
        data: monthlyCounts,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Suma totală a asigurărilor (RON)',
        data: monthlySums,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Statistici Asigurări',
      },
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <h2 className="text-2xl font-semibold leading-6 text-gray-900 mb-4">Rapoarte Asigurări</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default Reports;
