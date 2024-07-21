import React from 'react';
import ConstrainedHeaderComponent from '../components/constrainedHeaderComponent';
import Footer from '../components/footer';

const StartPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ConstrainedHeaderComponent />

      <main className="flex-grow bg-gray-100">
        <section className="bg-white py-12">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-800">Bun venit la Ritasig!</h1>
            <p className="mt-4 text-gray-600">
              Noi ne ocupăm de asigurări auto precum RCA, CASCO sau Cartea Verde.
            </p>
            <div className="mt-8">
              <a href="/insurance" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-blue-700 transition duration-300">
                Comandă acum o asigurare online
              </a>
            </div>
          </div>
        </section>

        <section className="bg-gray-200 py-12">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800">Asigurări RCA</h2>
              <p className="mt-4 text-gray-600">Protecție completă pentru vehiculul tău la cele mai bune prețuri.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800">Asigurări CASCO</h2>
              <p className="mt-4 text-gray-600">Asigurare completă pentru orice situație neprevăzută.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800">Carte Verde</h2>
              <p className="mt-4 text-gray-600">Asigurare internațională pentru călătorii fără griji.</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">De ce să alegi ritasig?</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">Prețuri competitive</h3>
                <p className="mt-4 text-gray-600">Oferim cele mai bune tarife de pe piață pentru toate tipurile de asigurări auto.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">Servicii rapide</h3>
                <p className="mt-4 text-gray-600">Proces de comandă online simplu și rapid, fără bătăi de cap.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">Suport dedicat</h3>
                <p className="mt-4 text-gray-600">Echipa noastră este gata să te ajute în orice moment, pentru orice întrebare sau problemă.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StartPage;
