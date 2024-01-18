'use client';

import React from 'react';
import GoverningLaw from '../components/GoverningLaw';
import IntellectualProperty from '../components/IntellectualProperty';
import LimitationOfLiability from '../components/LimitationsOfLiability';
import ModificationsToTerms from '../components/ModificationOfTerms';
import Termination from '../components/Termination';
import UserResponsibilities from '../components/UserResponsibilities';
import WarrantyDisclaimer from '../components/WarrantyDisclaimer';
import Nav from '../components/Navbar/navbar';

const PrivacyPolicy = () => {
  return (
    <section className='flex items-center bg-gray-100 font-poppins dark:bg-gray-800 lg:h-screen'>
      <Nav/>
      <div className='container p-4 mx-auto'>
        <h2 className='pb-2 text-2xl font-semibold text-center text-gray-800 md:text-4xl dark:text-gray-400'>
          Privacy Policy and Legal Information
        </h2>

        
      </div>
    </section>
  )
}

export default PrivacyPolicy;