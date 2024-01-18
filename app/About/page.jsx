import Nav from "../components/Navbar/navbar";

const DescriptionOfService = () => {
    return (
     <section className='flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800'>
        <Nav/>
      <div className='justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6'>
        <div className='flex flex-wrap'>
          <div className='w-full px-4 mb-10 lg:w-1/2 lg:mb-0'>
            <div className='relativr mx:max-w-md'>
              <img src='tumblr_c90bb56a9bf8859b0e663a6a561a340b_2507a5d2_1280.jpg' alt='vega bot' className='relative z-10 object-cover w-full rounded h-96'></img>
              <div className='absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-blue-500 rounded shadow dark:border-blue-400 lg:-mb-8 lg:-mr-11 sm:pb-8 dark:text-gray-300 dark:bg-gray-800'>
                <p className='text-lg font-semibold md:w-72'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' className='absolute top-0 left-0 w-16 h-16 text-blue-700 dark:text-gray-300 opacity-10' viewBox='0 0 16 16'>
                  <path d='M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z'></path>
                  </svg> Successfully providing Discord servers with a variety of features and commands since 2024.
                </p> 
              </div>
            </div>
          </div>

          <div className='w-full px-6 mb-10 lg:w-1/2 lg:mb-0'>
            <div className='pl-4 mb-6 border-l-4 border-blue-500'>
              <span className='text-sm text-gray-600 uppercase dark:text-gray-300'>Who is Vega?</span>
              <h1 className='mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300'>
                About Vega
              </h1>
            </div>

            <p className='mb-6 text-base leading-7 text-gray-500 dark:text-gray-400'>
              <strong className='text-red-200'>Help Command:</strong> Provides users with information on how to use the bot and its commands<br/>
              <strong className='text-red-200'>Bot Information:</strong> Displays detailed information about GameBot<br/>
              <strong className='text-red-200'>Server Information:</strong> Offers insights into server details and statistics<br/>
              <strong className='text-red-200'>Ping:</strong> {" Tests the bot's responsiveness and connection speed "}<br/>
              <strong className='text-red-200'>Sync and Unsync:</strong> Allows server owners to manage slash commands for customization<br/>
              <strong className='text-red-200'>Dice Roll:</strong> A fun feature to simulate dice rolling for games and decision-making<br/>
              <strong className='text-red-200'>Rock Paper Scissors:</strong> Play the classic Rock, Paper, Scissors game directly in Discord<br/>
            </p>
          </div>
        </div>
      </div>
     </section>
    );
  };
  
export default DescriptionOfService;
  