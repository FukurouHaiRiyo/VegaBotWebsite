import React from 'react';

const UserResponsibilities = () => {
  return (
    <div className='max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-8'>
        <h2 className='text-2xl font-semibold text-gray-800'>User responsabilities</h2>

        <p className='mt-4 text-gray-600'>
            As a user, you are expected to adhere to certain standards of behavior and conduct to ensure a positive and respectful environment for all users. By using Vega, you agree to the following responsibilities:
        </p>

        <ul className='list-disc list-inside space-y-2 mt-4 text-gray-800'>
            <li>Respectful Behavior: Maintain a courteous and respectful demeanor towards other users at all times.</li>
            <li>No Misuse: Use Vega only for its intended purpose and refrain from any attempts to exploit or misuse its features.</li>
            <li>Compliance with Discord's Terms: Adhere to Discord's own terms of service and community guidelines in all interactions involving the bot.</li>
            <li>Report Issues: Promptly report any bugs, glitches, or issues encountered while using Vega to ensure a smooth experience for all users.</li>
      </ul>

      <p className="mt-4 text-gray-600">
        Failure to comply with these responsibilities may result in restricted access to Vega features or removal from the server. I appreciate your cooperation in maintaining a positive community experience.
      </p>
    </div>
  )
}

export default UserResponsibilities;