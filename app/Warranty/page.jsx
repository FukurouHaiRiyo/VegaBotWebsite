import Nav from "../components/Navbar/navbar";

const WarrantyDisclaimer = () => {
    return (
      <div className='items-center bg-gray-100 font-poppins dark:bg-gray-800 lg:h-screen'>
        <div className='max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg my-8'>
          <Nav/>
          <br/>
          <h2 className='text-2xl font-semibold text-gray-200'>Warranty Disclaimer</h2>
          <p className='mt-4 text-gray-200'>
            Vega is provided "as is" and "as available" without any warranties of any kind, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement. The creators and maintainers of Vega do not warrant that the bot will be uninterrupted, error-free, or completely secure.
          </p>
          <p className='mt-4 text-gray-200'>
            There are no warranties that extend beyond the face of these terms, and the use of Vega is solely at your own risk. Any material downloaded or otherwise obtained through the use of the bot is done at your own discretion and risk, and you will be solely responsible for any damage to your computer system or loss of data that results from the download of such material.
          </p>
        </div>
      </div>
    );
  };
  
  export default WarrantyDisclaimer;
  