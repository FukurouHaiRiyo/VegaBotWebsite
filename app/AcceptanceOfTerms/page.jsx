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

              <div class='flex w-24 mt-1 mb-10 overflow-hidden rounded'>
                <div class='flex-1 h-2 bg-blue-200'></div>
                <div class='flex-1 h-2 bg-blue-400'></div>
                <div class='flex-1 h-2 bg-blue-600'></div>
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

      <div className='max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-md my-8'>
        <h2 className='text-2xl font-semibold text-gray-200'>Modifications to the Terms</h2>
          <p className='mt-4 text-gray-200'>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. When we do, we will post a notification on the main page of our website, send you an email, or provide a notification through the Discord interface.
          </p>
          <p className='mt-4 text-gray-00'>
            What constitutes a material change will be determined at our sole discretion. We encourage users to frequently check this page for any changes. Your continued use of Vega after any such changes constitutes your acceptance of the new Terms.
          </p>
      </div>

      <div className='max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg my-8'>
        <h2 className='text-3xl font-semibold text-gray-200'>User responsabilities</h2>

        <p className='mt-4 text-gray-200'>
            As a user, you are expected to adhere to certain standards of behavior and conduct to ensure a positive and respectful environment for all users. By using Vega, you agree to the following responsibilities:
        </p>

        <ul className='list-disc list-inside space-y-2 mt-4 text-gray-200'>
            <li>Respectful Behavior: Maintain a courteous and respectful demeanor towards other users at all times.</li>
            <li>No Misuse: Use Vega only for its intended purpose and refrain from any attempts to exploit or misuse its features.</li>
            <li>Compliance with Discord&#39s Terms: Adhere to Discord&#39s own terms of service and community guidelines in all interactions involving the bot.</li>
            <li>Report Issues: Promptly report any bugs, glitches, or issues encountered while using Vega to ensure a smooth experience for all users.</li>
        </ul>

        <p className='mt-4 text-gray-200'>
          Failure to comply with these responsibilities may result in restricted access to Vega features or removal from the server. I appreciate your cooperation in maintaining a positive community experience.
        </p>
      </div>
    </section>
  )
}

export default AcceptanceOfTerms;