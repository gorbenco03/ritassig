// src/pages/mainPage.tsx
import React from 'react';
import ConstrainedHeaderComponent from '../components/constrainedHeaderComponent';
import Details from '../components/details';
import FeatureComponent from '../components/featureComponent';
import Footer from '../components/footer';

const MainPage: React.FC = () => {
  return (
    <div>
      <ConstrainedHeaderComponent />
      <Details />
      <FeatureComponent />
      <Footer />
    </div>
  );
};

export default MainPage;
