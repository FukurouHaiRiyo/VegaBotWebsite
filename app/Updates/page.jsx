import React from 'react';
import Nav from '../components/Navbar/navbar';

const Updates = () => {
  return (
    <section className='items-center py-24 bg-gray-100 font-poppins dark:bg-gray-800'>
        <Nav/>
        <div className='justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6'>
            <div className='max-w-xl mx-auto'>
                <div className='text-center'>
                    <div className='relative flex flex-col items-center'>
                        <h1 className='text-6xl font-bold leading-tight dark:text-gray-300'>
                            Timeline
                        </h1>

                        <div className='flex w-24 mt-1 mb-10 overflow-hidden rounded'>
                            <div class='flex-1 h-2 bg-blue-200'>
                            </div>
                            <div class='flex-1 h-2 bg-blue-400'>
                            </div>
                            <div class='flex-1 h-2 bg-blue-600'>
                            </div>
                        </div>
                    </div> 

                    <p className='mb-16 text-base text-center text-gray-700 dark:text-gray-500'>
                        All the updates and changes to the bot will be listed here.
                        A lot of the updates will be based on user feedback and suggestions.
                    </p>
                </div>
            </div>

            <div className='w-full mx-auto lg:max-w-3xl'>
                <div className='relative flex justify-between'>
                    <div className='flex flex-col items-center w-10 mr-4 md:w-24'>
                        <div>
                            <div className='flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full dark:bg-blue-600'>
                                <div className='w-4 h-4 bg-blue-600 rounded-full dark:bg-blue-400'></div>
                            </div>
                        </div>
                        <div className='w-px h-full bg-blue-300 dark:bg-gray-600'></div>
                    </div>

                    <div>
                        <h2 className='inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900 dark:from-blue-400 dark:to-blue-500 rounded-3xl dark:text-gray-100'>
                            16th of January 2024
                        </h2>

                        <div className='relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow dark:border-gray-700 rounded-3xl dark:bg-gray-900'>
                            <div className='relative z-20 p-6'>
                                <p className='mb-2 text-xl font-bold text-gray-600 dark:text-gray-400'>
                                    Vega bot is released
                                </p>

                                <p class="text-gray-700 dark:text-gray-500">
                                    Vega bot is released to the public on  16th of January 2024, 
                                    containing the basic moderation tools, like warn, kick and ban. Also, Vega has some fun commands like 
                                    Rock, Paper, Scissors and dice roll.
                                    The bot is still in beta and is being 
                                    tested by a small group of users.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='relative flex justify-between'>
                    <div className='flex flex-col items-center w-10 mr-4 md:w-24'>
                        <div>
                            <div className='flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full dark:bg-gray-600'>
                                <div className='w-4 h-4 bg-blue-600 rounded-full dark:bg-blue-400'></div>
                            </div>
                        </div>

                        <div className='w-px h-full bg-blue-300 dark:bg-gray-600'></div>
                    </div>

                    <div>
                        <h2 className='inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900 dark:from-blue-400 dark:to-blue-500 rounded-3xl dark:text-gray-100'>
                            20th of January 2024
                        </h2>

                        <div className='relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow dark:border-gray-700 rounded-3xl dark:bg-gray-900'>
                            <div className='relative z-20 p-6'>
                                <p className='mb-2 text-xl font-bold text-gray-600 dark:text-gray-400'>
                                    Website for the bot is released
                                </p>

                                <p class="text-gray-700 dark:text-gray-500">
                                    The website for the bot is released. Here, the users can find all the 
                                    information about the bot, and also the commands and the documentation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                               
            </div>
        </div>
    </section>
  )
}

export default Updates;