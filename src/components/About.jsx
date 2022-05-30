import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#BBDAD0]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#6390E4]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hello there, I'm Knut.</p>
            </div>
            <div>
              <p> I am a full stack web development bachelor graduate. I love working 
                  on Front-end and functionality in the code. I am passionate with
                  accessibility and have a goal in anything I do that everyone who wishes
                  should be able to use my creations.  
                  </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
