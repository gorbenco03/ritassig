import React from 'react';
import ConstrainedHeaderComponent from '../components/constrainedHeaderComponent';
import Footer from '../components/footer';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ConstrainedHeaderComponent />
      
      <main className="flex-grow bg-gray-50">
        <section className="bg-white py-12">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-800">Contactează-ne</h1>
            <p className="mt-4 text-gray-600">
              Suntem aici pentru a răspunde la orice întrebare. Completează formularul de mai jos sau contactează-ne folosind informațiile noastre de contact.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800">Formular de Contact</h2>
              <form className="mt-6 space-y-4">
                <div>
                  <label className="block text-gray-700">Nume</label>
                  <input
                    type="text"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                    placeholder="Introdu numele tău"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                    placeholder="Introdu adresa de email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Mesaj</label>
                  <textarea
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                    rows={4}
                    placeholder="Scrie mesajul tău"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-blue-700 transition duration-300"
                >
                  Trimite
                </button>
              </form>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800">Informații de Contact</h2>
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-700">Adresa</h3>
                  <p className="text-gray-600">Str. București, Chisinau,  Republica Moldova</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700">Telefon</h3>
                  <p className="text-gray-600">+40 123 456 789</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700">Email</h3>
                  <p className="text-gray-600">contact@ritasig.ro</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700">Program</h3>
                  <p className="text-gray-600">Luni - Vineri: 9:00 - 18:00</p>
                  <p className="text-gray-600">Sâmbătă: 10:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
