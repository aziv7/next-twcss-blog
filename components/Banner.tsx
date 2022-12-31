const Banner = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
      <div>
        <h1 className='text-7xl '>Aziz's Daily Blog</h1>

        <h2 className='mt-5 md:mt-0'>
          Welcome to{' '}
          <span className='underline decoration-4 decoration-btnTextOrange'>
            favorite blog in the Devosphere
          </span>{' '}
        </h2>
      </div>

      <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
        New tech stacks | The latest news | The weekly debugging nightmares &
        More!
      </p>
    </div>
  );
};

export default Banner;
