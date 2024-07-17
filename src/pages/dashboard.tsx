import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout'; // Make sure to adjust the import path accordingly
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';

interface Insurance {
  _id: string;
  Nume: string;
  Prenume: string;
  CNP: number;
  DataNasterii: Date;
  PermisDeConducere: string;
  Email: string;
  NrDeTelefon: string;
  Adresa: string;
  MarcaMasinii: string;
  Modelul: string;
  CategoriaMasinii: string;
  NumarulWIN: string;
  AnProductie: number;
  CapacitateCilindrica: number;
  NrInmatriculare: string;
  NrCertificatInmatriculare: string;
  NormaDePoluare: string;
  TipCombustibil: string;
  PerioadaDeAsigurare: string;
  TipAsigurare: string;
  PretAsigurare: number;
  StatusAsigurare: string;
  NumarSerie: string;
  DataInceput: Date;
  DataSfarsit: Date;
}

const Dashboard: React.FC = () => {
  const [recentActivities, setRecentActivities] = useState<Insurance[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [totalSum, setTotalSum] = useState(0);

  const [filterStartDate, setFilterStartDate] = useState<Date | null>(null);
  const [filterEndDate, setFilterEndDate] = useState<Date | null>(null);
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [filterPrice, setFilterPrice] = useState<number | null>(null);
  const [filterType, setFilterType] = useState<string | null>(null);
  const [tempSearch, setTempSearch] = useState<string>('');
  const [search, setSearch] = useState<string>('');

  const [tempFilterStartDate, setTempFilterStartDate] = useState<Date | null>(null);
  const [tempFilterEndDate, setTempFilterEndDate] = useState<Date | null>(null);
  const [tempFilterStatus, setTempFilterStatus] = useState<string | null>(null);
  const [tempFilterPrice, setTempFilterPrice] = useState<number | null>(null);
  const [tempFilterType, setTempFilterType] = useState<string | null>(null);

  useEffect(() => {
    const fetchInsurances = async () => {
      try {
        const response = await fetch('https://ritasig.ddnsking.com/api/insurances');
        const data = await response.json();

        let filteredData = data;

        if (filterStartDate) {
          filteredData = filteredData.filter((insurance: Insurance) =>
            new Date(insurance.DataInceput) >= filterStartDate
          );
        }

        if (filterEndDate) {
          filteredData = filteredData.filter((insurance: Insurance) =>
            new Date(insurance.DataSfarsit) <= filterEndDate
          );
        }

        if (filterStatus) {
          filteredData = filteredData.filter(
            (insurance: Insurance) => insurance.StatusAsigurare === filterStatus
          );
        }

        if (filterPrice !== null) {
          filteredData = filteredData.filter(
            (insurance: Insurance) => insurance.PretAsigurare <= filterPrice
          );
        }

        if (filterType) {
          filteredData = filteredData.filter(
            (insurance: Insurance) => insurance.TipAsigurare === filterType
          );
        }

        if (search) {
          const searchLower = search.toLowerCase();
          filteredData = filteredData.filter(
            (insurance: Insurance) =>
              `${insurance.Nume.toLowerCase()} ${insurance.Prenume.toLowerCase()}`.includes(searchLower)
          );
        }

        setRecentActivities(filteredData);
        const totalSum = filteredData.reduce(
          (acc: any, curr: { PretAsigurare: any }) => acc + curr.PretAsigurare,
          0
        );
        setTotalSum(totalSum);
      } catch (error) {
        console.error('Failed to fetch insurances:', error);
      }
    };

    fetchInsurances();
  }, [filterStartDate, filterEndDate, filterStatus, filterPrice, filterType, search]);

  const applyFilters = () => {
    setSearch(tempSearch);
    setFilterStartDate(tempFilterStartDate);
    setFilterEndDate(tempFilterEndDate);
    setFilterStatus(tempFilterStatus);
    setFilterPrice(tempFilterPrice);
    setFilterType(tempFilterType);
  };

  const resetFilters = () => {
    setTempFilterStartDate(null);
    setTempFilterEndDate(null);
    setTempFilterStatus(null);
    setTempFilterPrice(null);
    setTempFilterType(null);
    setTempSearch('');

    setFilterStartDate(null);
    setFilterEndDate(null);
    setFilterStatus(null);
    setFilterPrice(null);
    setFilterType(null);
    setSearch('');
  };

  const pendingInsurancesCount = recentActivities.filter(
    (activity) =>
      activity.StatusAsigurare !== 'Acceptat' &&
      activity.StatusAsigurare !== 'Respins',
  ).length;


  const handleApprove = async (_id: string) => {
    try {
      const response = await fetch(
        `https://ritasig.ddnsking.com/api/insurances/${_id}/status`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status: 'Acceptat' }),
        },
      );

      if (response.ok) {
        const updatedInsurance = await response.json();
        const updatedActivities = recentActivities.map((activity) => {
          if (activity._id === _id) {
            return { ...activity, ...updatedInsurance };
          }
          return activity;
        });
        setRecentActivities(updatedActivities);
        console.log('Approved successfully');
      } else {
        console.error('Failed to approve');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleReject = async (_id: string) => {
    try {
      const response = await fetch(
        `https://ritasig.ddnsking.com/api/insurances/${_id}/status`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status: 'Respins' }),
        },
      );

      if (response.ok) {
        const updatedInsurance = await response.json();
        const updatedActivities = recentActivities.map((activity) => {
          if (activity._id === _id) {
            return { ...activity, ...updatedInsurance };
          }
          return activity;
        });
        setRecentActivities(updatedActivities);
        console.log('Rejected successfully');
      } else {
        console.error('Failed to reject');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleGenerateInvoice = async (_id: string) => {
    try {
      const response = await fetch(
        `https://ritasig.ddnsking.com/api/insurances/${_id}/generate-invoice`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.ok) {
        const invoice = await response.json();
        console.log('Invoice generated successfully', invoice);
        // Handle the invoice data (e.g., show a download link)
      } else {
        console.error('Failed to generate invoice');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDownloadPDF = (_id: string) => {
    const link = document.createElement('a');
    link.href = `https://ritasig.ddnsking.com/api/insurances/${_id}/download-pdf`;
    link.target = '_blank';
    link.download = `Insurance_${_id}.pdf`;
    link.click();
  };

  const handleDownloadInvoice = (_id: string) => {
    const link = document.createElement('a');
    link.href = `https://ritasig.ddnsking.com/api/insurances/${_id}/download-invoice`;
    link.target = '_blank';
    link.download = `Invoice_${_id}.pdf`;
    link.click();
  };

  return (
    <Layout current="Home">
      <div className="mt-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold leading-6 text-gray-900 mb-4">Filtre</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Căutare Nume și Prenume</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                onChange={(e) => setTempSearch(e.target.value)}
                value={tempSearch}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Data de început</label>
              <input
                type="date"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                onChange={(e) => setTempFilterStartDate(new Date(e.target.value))}
                value={tempFilterStartDate ? tempFilterStartDate.toISOString().substr(0, 10) : ''}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Data de sfârșit</label>
              <input
                type="date"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                onChange={(e) => setTempFilterEndDate(new Date(e.target.value))}
                value={tempFilterEndDate ? tempFilterEndDate.toISOString().substr(0, 10) : ''}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                onChange={(e) => setTempFilterStatus(e.target.value)}
                value={tempFilterStatus || ''}
              >
                <option value="">Toate</option>
                <option value="Acceptat">Acceptat</option>
                <option value="Respins">Respins</option>
              </select>
            </div>
          
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Tipul asigurării</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                onChange={(e) => setTempFilterType(e.target.value)}
                value={tempFilterType || ''}
              >
                <option value="">Toate</option>
                <option value="RCA">RCA</option>
                <option value="CASCO">CASCO</option>
                <option value="CARTE VERDE">CARTE VERDE</option>
                {/* Adaugă alte tipuri de asigurări după cum este necesar */}
              </select>
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-end space-x-3">
              <button
                onClick={() => {
                  setSearch(tempSearch);
                  applyFilters();
                }}
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Aplică filtrele
              </button>
              <button
                onClick={resetFilters}
                className="inline-flex justify-center rounded-md border border-transparent bg-gray-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Resetează filtrele
              </button>
            </div>
          </div>
        </div>

        <h2 className="mx-auto mt-8 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8">
          Recent activity
        </h2>
        <div className="hidden sm:block">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mt-2 flex flex-col">
              <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900">
                        Nume și Prenume
                      </th>
                      <th className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900">
                        Tip Asigurare
                      </th>
                      <th className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900">
                        Pret Asigurare
                      </th>
                      <th className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900">
                        Extinde
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {recentActivities.map((activity, index) => (
                      <React.Fragment key={activity._id || index}>
                        <tr>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                            {activity.Nume} {activity.Prenume}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                            {activity.TipAsigurare}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                            {activity.PretAsigurare.toFixed(2)} RON
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                            <button
                              onClick={() =>
                                setSelectedIndex(
                                  index === selectedIndex ? null : index,
                                )
                              }
                              className="inline-flex items-center text-cyan-600 hover:text-cyan-900"
                            >
                              {selectedIndex === index ? (
                                <ChevronUpIcon className="h-5 w-5" />
                              ) : (
                                <ChevronDownIcon className="h-5 w-5" />
                              )}
                            </button>
                          </td>
                        </tr>
                        {selectedIndex === index && (
                          <tr>
                            <td
                              colSpan={4}
                              className="bg-gray-50 px-6 py-4"
                            >
                              <div className="text-sm text-gray-900 font-medium">
                                Detalii solicitare asigurare:
                              </div>
                              <div className="mt-2">
                                <table className="min-w-full divide-y divide-gray-200">
                                  <tbody className="bg-white divide-y divide-gray-200">
                                    {/* Details of the insurance request */}
                                    <tr>
                                      <td className="px-2 py-2 text-gray-500">
                                        Nume:
                                      </td>
                                      <td className="px-2 py-2 text-gray-900">
                                        {activity.Nume}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="px-2 py-2 text-gray-500">
                                        Prenume:
                                      </td>
                                      <td className="px-2 py-2 text-gray-900">
                                        {activity.Prenume}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="px-2 py-2 text-gray-500">
                                        CNP:
                                      </td>
                                      <td className="px-2 py-2 text-gray-900">
                                        {activity.CNP}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="px-2 py-2 text-gray-500">
                                        Data Nașterii:
                                      </td>
                                      <td className="px-2 py-2 text-gray-900">
                                        {new Date(
                                          activity.DataNasterii,
                                        ).toLocaleDateString()}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="px-2 py-2 text-gray-500">
                                        Permis De Conducere:
                                      </td>
                                      <td className="px-2 py-2 text-gray-900">
                                        {activity.PermisDeConducere}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="px-2 py-2 text-gray-500">
                                        Email:
                                      </td>
                                      <td className="px-2 py-2 text-gray-900">
                                        {activity.Email}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="px-2 py-2 text-gray-500">
                                        Nr De Telefon:
                                      </td>
                                      <td className="px-2 py-2 text-gray-900">
                                        {activity.NrDeTelefon}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="px-2 py-2 text-gray-500">
                                        Adresa:
                                      </td>
                                      <td className="px-2 py-2 text-gray-900">
                                        {activity.Adresa}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="px-2 py-2 text-gray-500">
                                        Marca Mașinii:
                                      </td>
                                      <td className="px-2 py-2 text-gray-900">
                                        {activity.MarcaMasinii}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="px-2 py-2 text-gray-500">
                                        Modelul:
                                      </td>
                                      <td className="px-2 py-2 text-gray-900">
                                        {activity.Modelul}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="px-2 py-2 text-gray-500">
                                        Categoria mașinii:
                                      </td>
                                      <td className="px-2 py-2 text-gray-900">
                                        {activity.CategoriaMasinii}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="px-2 py-2 text-gray-500">
                                        Serie de șasiu
                                      </td>
                                      <td className="px-2 py-2 text-gray-900">
                                        {activity.NumarulWIN}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="px-2 py-2 text-gray-500">
                                        An producție:
                                      </td>
                                      <td className="px-2 py-2 text-gray-900">
                                        {activity.AnProductie}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="px-2 py-2 text-gray-500">
                                        Capacitate Cilindrică:
                                      </td>
                                      <td className="px-2 py-2 text-gray-900">
                                        {activity.CapacitateCilindrica}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="px-2 py-2 text-gray-500">
                                        Număr înmatriculare:
                                      </td>
                                      <td className="px-2 py-2 text-gray-900">
                                        {activity.NrInmatriculare}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="px-2 py-2 text-gray-500">
                                        Certificat de înmatriculare:
                                      </td>
                                      <td className="px-2 py-2 text-gray-900">
                                        {
                                          activity.NrCertificatInmatriculare
                                        }
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="px-2 py-2 text-gray-500">
                                        Norma de poluare:
                                      </td>
                                      <td className="px-2 py-2 text-gray-900">
                                        {activity.NormaDePoluare}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="px-2 py-2 text-gray-500">
                                        Tip Combustibil:
                                      </td>
                                      <td className="px-2 py-2 text-gray-900">
                                        {activity.TipCombustibil}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="px-2 py-2 text-gray-500">
                                        Perioada de asiguare:
                                      </td>
                                      <td className="px-2 py-2 text-gray-900">
                                        {activity.PerioadaDeAsigurare}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="px-2 py-2 text-gray-500">
                                        Tip Asigurare:
                                      </td>
                                      <td className="px-2 py-2 text-gray-900">
                                        {activity.TipAsigurare}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="px-2 py-2 text-gray-500">
                                        Data Început:
                                      </td>
                                      <td className="px-2 py-2 text-gray-900">
                                        {new Date(
                                          activity.DataInceput,
                                        ).toLocaleDateString()}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="px-2 py-2 text-gray-500">
                                        Data Sfârșit:
                                      </td>
                                      <td className="px-2 py-2 text-gray-900">
                                        {new Date(
                                          activity.DataSfarsit,
                                        ).toLocaleDateString()}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="px-2 py-2 text-gray-500">
                                        Pret Asigurare:
                                      </td>
                                      <td className="px-2 py-2 text-gray-900">
                                        {activity.PretAsigurare.toFixed(
                                          2,
                                        )}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="px-2 py-2 text-gray-500">
                                        Statut Asigurare:
                                      </td>
                                      <td className="px-2 py-2 text-gray-900">
                                        {activity.StatusAsigurare}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="px-2 py-2 text-gray-500">
                                        Numar Serie:
                                      </td>
                                      <td className="px-2 py-2 text-gray-900">
                                        {activity.NumarSerie}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div className="mt-4 flex justify-end space-x-3">
                                  <button
                                    onClick={() =>
                                      handleApprove(activity._id)
                                    }
                                    className="inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                  >
                                    Aprobă
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleReject(activity._id)
                                    }
                                    className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                  >
                                    Respinge
                                  </button>
                                </div>
                                {activity.StatusAsigurare ===
                                  'Acceptat' && (
                                  <div className="mt-4 flex justify-end space-x-3">
                                    <button
                                      onClick={() =>
                                        handleGenerateInvoice(
                                          activity._id,
                                        )
                                      }
                                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    >
                                      Generează Factura
                                    </button>
                                    <button
                                      onClick={() =>
                                        handleDownloadInvoice(
                                          activity._id,
                                        )
                                      }
                                      className="inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                    >
                                      Descarcă Factura
                                    </button>
                                    <button
                                      onClick={() =>
                                        handleDownloadPDF(activity._id)
                                      }
                                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                      Descarcă PDF
                                    </button>
                                  </div>
                                )}
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
