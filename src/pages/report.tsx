import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Insurance {
  _id: string;
  Nume: string;
  Prenume: string;
  CNP: number;
  DataInceput: Date;
  PretAsigurare: number;
  TipAsigurare: string;
}

const Reports: React.FC = () => {
  const [insurances, setInsurances] = useState<Insurance[]>([]);
  const [filterType, setFilterType] = useState<string>('');

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

  const getFilteredData = () => {
    const filteredData = filterType
      ? insurances.filter(insurance => insurance.TipAsigurare === filterType)
      : insurances;
    return filteredData;
  };

  const getMonthlyData = (filteredData: Insurance[]) => {
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const currentYear = new Date().getFullYear();

    const monthlyCounts = months.map(month => {
      return filteredData.filter(insurance => {
        const date = new Date(insurance.DataInceput);
        return date.getFullYear() === currentYear && date.getMonth() + 1 === month;
      }).length;
    });

    const monthlySums = months.map(month => {
      return filteredData.filter(insurance => {
        const date = new Date(insurance.DataInceput);
        return date.getFullYear() === currentYear && date.getMonth() + 1 === month;
      }).reduce((sum, insurance) => sum + insurance.PretAsigurare, 0);
    });

    return { monthlyCounts, monthlySums };
  };

  const filteredData = getFilteredData();
  const { monthlyCounts, monthlySums } = getMonthlyData(filteredData);

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
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Tipul asigurării</label>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
          onChange={(e) => setFilterType(e.target.value)}
          value={filterType}
        >
          <option value="">Toate</option>
          <option value="RCA">RCA</option>
          <option value="CASCO">CASCO</option>
          <option value="CARTE VERDE">CARTE VERDE</option>
        </select>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Bar data={chartData} options={options} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mt-8">
        <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-4">Detalii statistice</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Luna
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Numărul de asigurări
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Suma totală (RON)
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {chartData.labels.map((label, index) => (
              <tr key={label}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{label}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                  {monthlyCounts[index]}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                  {monthlySums[index].toFixed(2)} RON
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
