import React from 'react';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#BBDAD0]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p> Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold'>
          Knut Standal Anly
        </h1>
        <h2 className='text-2xl sm:text-6xl font-bold '>
          I'm a full stack web development bachelor graduate!
        </h2>
        <p className='py-4 max-w-[700px]'>
          I'm a full stack web developer who loves to work with functionality 
          and Front-end. I love seeing the work done visually on a page 
        </p>
        
      </div>
    </div>
  );
};

export default Home;
