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
              
            </div>
          </div>

          <div className='w-full px-6 mb-10 lg:w-1/2 lg:mb-0'>
            <div className='pl-4 mb-6 border-l-4 border-blue-500'>
              <span className='text-sm text-gray-600 uppercase dark:text-gray-300'>Who is Vega?</span>
              <h1 className='mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300'>
                About Vega
              </h1>
            </div>

            <p className = 'mb-6 text-xs leading-6 text-gray-500 dark:text-gray-400'>
              Vega is a Discord bot that is designed to help users manage their servers,
              as well as provide fun features for users to enjoy. Vega is a multi-purpose 
              bot that can be used to help moderate servers, provide server information, 
              and play games. Vega is a bot that is constantly being updated and improved, 
              so be sure to check back often for new features and updates.

              You can invite the bot in your server using <a href='https://discord.com/api/oauth2/authorize?client_id=1084035121541283930&permissions=1377039411958&scope=bot%20applications.commands' className='font-bold text-red-400'>this link</a>
            </p>

            <p className='mb-6 text-xs leading-6 text-gray-500 dark:text-gray-400'>
              <strong className='text-red-200'>Help Command:</strong> Provides users with information on how to use the bot and its commands<br/>
              <strong className='text-red-200'>Bot Information:</strong> Displays detailed information about GameBot<br/>
              <strong className='text-red-200'>Server Information:</strong> Offers insights into server details and statistics<br/>
              <strong className='text-red-200'>Ping:</strong> {" Tests the bot's responsiveness and connection speed "}<br/>
              <strong className='text-red-200'>Sync and Unsync:</strong> Allows server owners to manage slash commands for customization<br/>
              <strong className='text-red-200'>Dice Roll:</strong> A fun feature to simulate dice rolling for games and decision-making<br/>
              <strong className='text-red-200'>Rock Paper Scissors:</strong> Play the classic Rock, Paper, Scissors game directly in Discord<br/>
              <strong className='text-red-200'>Moderation commands:</strong> This bot also offers a variety of moderation commands to help manage your server, such as <strong className='text-blue-200'>slowmode</strong> - for limiting users when they send messages, <strong className='text-blue-200'>purge</strong> - to delete messages in a chat, <strong className='text-blue-200'>lock and unlock</strong> - to lock or unlock a specific chat, <strong className='text-blue-200'>kick</strong> - to kick members out of your server, <strong className='text-blue-200'>ban and unban</strong> - to ban and unban users, <strong className='text-blue-200'>mute and unmute</strong> for muting and unmuting users from your server.<br/>
              <strong className='text-red-200'>Ticket system: </strong> This bot also offers a ticket system for users to create tickets for support and assistance. <br/>
              <strong className='text-red-200'>Pwned command: </strong> This command lets you know if your password was part of a databreach. <br/>
            </p>
          </div>
        </div>
      </div>
     </section>
    );
  };
  
export default DescriptionOfService;
  