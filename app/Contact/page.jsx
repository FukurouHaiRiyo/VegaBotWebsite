import Nav from "../components/Navbar/navbar";

const ContactInformation = () => {
    return (
      <section className='py-16 bg-gray-200 font-poppins dar:bg-gray-900'>
        <Nav/>
        <div className='justify-center flex-1 max-w-5xl px-4 py-4 mx-auto lg:py-10 md:px-7'>
          <div className='max-w-xl mx-auto'>
            <div className='text-center'>
              <div className='relative flex flex-col items-center'>
                <div className='absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10'>
                  Contact
                </div>

                <h1 className='text-5xl font-bold dark:text-white'>Our <span className='text-blue-500'>Contact</span></h1>

                <div className='flex w-24 mt-1 mb-10 overflow-hidden rounded'>
                  <div class='flex-1 h-2 bg-blue-200'>
                  </div>
                  <div class='flex-1 h-2 bg-blue-400'>
                  </div>
                  <div class='flex-1 h-2 bg-blue-600'>
                  </div>
                </div>

                <p className='mb-16 text-base text-center text-gray-500'>
                  Contact the dev team for any questions, concerns, or suggestions.
                  Alternatively, you can join our Discord server and ask in the support channel.
                </p>
              </div>
            </div>

            <div className='flex flex-wrap mb-8 -mx-4'>
                <div className='w-full px-4 mb-4 lg:w-1/3 lg:mb-0'>
                    <div
                        className='h-full py-12 text-center transition-all rounded-lg shadow dark:bg-gray-800 bg-gray-50 hover:shadow-lg'>
                        <div
                            className='inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-blue-500 rounded-full dark:bg-blue-500'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor'
                                className='bi bi-envelope' viewBox='0 0 16 16'>
                                <path
                                    d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z'>
                                </path>
                            </svg>
                        </div>
                        <h2 className='mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400'>
                            Discord</h2>
                        <a href='#'
                            className='text-base font-medium text-gray-500 md:text-lg dark:text-gray-400'>fukurou_hai_riyo</a>
                    </div>
                </div>

                <div className='w-full px-4 mb-4 lg:w-1/3 lg:mb-0'>
                  <div className='h-full py-12 text-center transition-all rounded-lg shadow dark:bg-gray-800 bg-gray-50 hover:shadow-lg'>
                    <div className='inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-blue-500 rounded-full dark:bg-blue-500'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-telephone' viewBox='0 0 16 16'>
                        <path
                          d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'>
                        </path>
                      </svg>
                    </div>

                    <h2 className='mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400'>
                      Email
                    </h2>
                    <a href='/' className='text-base font-medium text-gray-500 md:text-lg dark:text-gray-400'>
                      ps7041247@gmail.com
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div className='px-8 py-8 bg-white border rounded-md shadow-md dark:border-gray-800 dark:bg-gray-800'>
          <form action=''>
            <div className='mb-6'>
              <h2 className='text-xl font-bold text-gray-200 dark:text-gray-400'>
                Please send a message for further information!
              </h2>
            </div>

            <div className='flex flex-wrap mb-4 -mx-2'>
              <div className='w-full px-2 mb-4 lg:mb-0 lg:w-1/2'>
                <input className='w-full px-3 py-2 leading-loose border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700' type='text' placeholder='Discord tag' required=''/>
              </div>

              <div className='w-full px-2 mb-4 lg:mb-0 lg:w-1/2'>
                <input className='w-full px-3 py-2 leading-loose border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700' type='text' placeholder='Issue' required=''/>
              </div>
            </div>

            <textarea rows='4' type='message' placeholder='Message' required='' className='block w-full px-4 mb-4 leading-tight text-gray-700 border rounded bg-gray-50 dark:placeholder-gray-400 py-7 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-700'/>
            <button className='w-full py-4 text-sm font-bold leading-normal text-white transition-all duration-300 bg-blue-600 rounded-md dark:bg-blue-500 dark:hover:bg-blue-600 hover:bg-blue-700'>
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactInformation;
  