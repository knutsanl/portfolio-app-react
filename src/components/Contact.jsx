import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full  bg-[#BBDAD0] flex justify-center items-center p-4'>
      {/*  <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#234099] '>Contact</p>
                <p className=' py-4'> Submit the form below or shoot me an email - knut.anly@gmail.com</p>
            </div>
            <input className='bg-white p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-white' type="email" placeholder='Email' name='email' />
            <textarea className='bg-white p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className=' border-2 hover:bg-[#234099] hover:border-[#234099] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form> */}

<div className='flex flex-col justify-center items-center w-4/5 h-full'>
            <div className='sm:text-right text-4xl font-bold bg-[#BBDAD0]'>
              <p>About the Portfolio</p>
            </div>
            <div>
              <p> 
                  The portfolio was created for the exhibition in the cource IDG3800 Mappe og Utstilling. At the 
                  start of the semester we were asked to provide a plan on how we would execute the portfolio itself
                  and overall my contribution to the exhibition planning and executing. 
              </p>  
              <p>
                For the portfolio the portfolio ended up using completely different technologies than what was originally
                planned. The main reason as to why it was changed was due to the "Starter" I planned to use was outdated,
                and not working with the new versions of strapi. I did not want to use an older version of strapi and mess 
                with the base configurations of the CMS. As a result of this, I chose to use something that I was
                familiar with from before, but also a twist of something new. The main reason as to why I were determined to 
                use a new technology was due to me being interested in the shorthand aspect of Tailwind. With the changes from
                the "Starter", to the new plan, I would end up using primarily React and Tailwind. All of the projects mentioned
                in my original plan are present in the portfolio, as no changes were made there.
              </p>
              <p>
                In terms of the timeframes I provided, they also got altered a bit. Obviously the time of delivery got changed, but also 
                after talking to the team responsible for the contents, I were allowed to provide the link later. I could've sent an empty
                link, but did not really see the point in this. I were also getting busy with the bachelor project as I realized that the 
                group were getting short on time, and made the decision to prioritize that. 
              </p>
              <p>
                In terms of my role in the organisation of the exhibition, that got altered. The main reason for that is due to me
                coming in late and the work being done early in the process. As a result of that I transferred over to Facilitators.
                My role as a facilitator is essentially to work on the logistics of the exhebition. That would include setting up
                tables, monitors, finding various needs, creating QR-codes, creating a slideshow and cleaning up amongst others. 
                At the time of writing this, some of these things are done, while others are in the works. 
              </p>
            </div>
          </div>
    </div>
  )
}

export default Contact