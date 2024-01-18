'use client';

import React from 'react';
import Nav from '../components/Navbar/navbar';

const PrivacyPolicy = () => {
  return (
    <div className='items-center bg-gray-100 font-poppins dark:bg-gray-800'>
      <Nav/>
      <br/>
      <div className='flex-grow max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg my-8'>
        <h2 className='text-3xl font-semibold text-gray-200'>Privacy</h2>
          <p className='mt-4 text-gray-200'>
            {"Your privacy is important to us. Vega is committed to responsibly handling the information and data we collect through our Discord bot in compliance with our Privacy Policy. This policy outlines the types of data we collect, how it's used, and how we protect it."}
          </p>
          <p className='mt-4 text-gray-00'>
            What constitutes a material change will be determined at our sole discretion. We encourage users to frequently check this page for any changes. Your continued use of Vega after any such changes constitutes your acceptance of the new Terms.
          </p>
          <br/>
          <br/>
          <h3 className='text-xl font-semibold text-gray-200 mt-2'>
            What information does Vega collect?
          </h3>

          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>User IDs: To uniquely identify users within Discord.</li>
            <li>Server IDs: To provide server-specific commands and functionalities.</li>
            <li>{"Interaction Data: To improve the bot's functionality and user experience."}</li>
        </ul>
        <p className='mt-4 text-gray-200'>
          {"The data collected by Vega is used to provide and improve the bot's functionality, offer personalized user experience and ensure bot's stability and functionality. We do not sell or share this data with third parties."}
        </p>
      </div>

      <div className='flex-grow max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg my-8'>
        <h2 className='text-3xl font-semibold text-gray-200'>Governing Law and intelectual property</h2>
        <p className='mt-4 text-gray-200'>
          These Terms shall be governed and construed in accordance with the laws of EU, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
        </p>
        <p className='mt-4 text-gray-200'>
          If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our bot, and supersede and replace any prior agreements we might have between us regarding the bot.
        </p>

        <p className='mt-4 text-gray-200'>
          The intellectual property rights of Vega, including but not limited to its code, design, trademarks, and any documentation, are the sole property of the creators of this bot. All rights are reserved.
        </p>
            
        <p className='mt-4 text-gray-200'>
            The use of Vega by its users does not grant them any ownership or rights to the intellectual property of the bot. Users are granted a limited license to access and use Vega in accordance with these terms, but no other rights are conveyed.
        </p>
           
        <p className='mt-4 text-gray-200'>
            Any unauthorized use, modification, distribution, or reproduction of Vega or its components is expressly prohibited and may be subject to legal action.
        </p>
      </div>

      <div className='max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg my-8'>
        <h2 className='text-3xl font-semibold text-gray-200'>Limitation of Liability</h2>
        <p className='mt-4 text-gray-200'>
          The creators and maintainers of Vega shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses (even if advised of the possibility of such damages), resulting from the use or the inability to use the bot or any other matter relating to the bot.
        </p>
        <p className='mt-4 text-gray-200'>
          While every effort is made to ensure the smooth operation and accuracy of Vega, we cannot guarantee that there will be no errors, interruptions, or other issues. The use of Vega is at your own discretion and risk.
        </p>
      </div>

      <div className='max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg my-8'>
        <h2 className='text-3xl font-semibold text-gray-200'>Termination</h2>
        <p className='mt-4 text-gray-200'>
          We reserve the right to terminate or suspend access to our bot at any time, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Reasons for termination may include, but are not limited to, misuse of the bot, abusive behavior, or any other conduct that is deemed incompatible with the intended use of the bot.
        </p>
        <p className='mt-4 text-gray-200'>
          Upon termination, your right to use the bot will immediately cease. If you wish to terminate your account, you may simply discontinue using the bot.
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy;