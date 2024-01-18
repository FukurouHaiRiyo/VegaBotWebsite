import React from 'react';
import Nav from '../components/Navbar/navbar';

const AcceptanceOfTerms = () => {
  return (
    <section className='items-center py-24 bg-gray-100 font-popins dark:bg-gray-800'>
      <Nav/>
      <div className='justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6'>
        <div className='max-w-xl mx-auto'>
          <div className='text-center'>
            <div className='relative flex flex-col items-center'>
              <h1 className='text-6xl font-bold leading-tight dark:text-gray-300'>
                Terms of Service
              </h1>

              <div class="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                <div class="flex-1 h-2 bg-blue-200"></div>
                <div class="flex-1 h-2 bg-blue-400"></div>
                <div class="flex-1 h-2 bg-blue-600"></div>
              </div>
            </div>

            <p className='mb-16 text-base text-center text-gray-500'>
              By accessing and using Vega, you acknowledge and agree to be bound by the terms and conditions outlined on this website. Your use of Vega signifies your acceptance of these terms and your agreement to adhere to them. If you do not agree to these terms, please refrain from using Vega.
            </p>

            <p className='mb-16 text-red-500 text-center'>
              Please check <strong><a href='/Privacy' className='text-decoration-line: underline'>Privacy</a></strong> for more information.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AcceptanceOfTerms;