import React from 'react'
import BannerImage from "../Assets/home-banner-image.png";
import AboutBackgroundImage from "../Assets/about-background-image.png"
import Dance from "../Assets/dancee.png"
import Techies from "../Assets/tech.png"
import Service from "../Assets/serve.png"

const LandingPage = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">

        <div className="home-text-section">
          <h1 className="font-bold text-wrap text-6xl font-sans text-maroon">
            Welcome to the Club Council :)
          </h1>
         </div>
         <div className=" mt-4 flex items-center justify-center">
            <img className="object-contain rounded-3xl" src={BannerImage} alt=""/>
          </div>
          <p className="text-black  -900 font-Liberation Mono font-semibold text-2xl p-6">
            Your gateway to explore, connect, and thrive within the heartbeat of campus life
          </p>
      </div>

      <div className="about-section-container">
      <div className=" mt-5 relative">
        <img className="right-0 absolute object-contain" src={AboutBackgroundImage} alt="" />
      </div>
      <div className="flex-wrap order-1 flex-shrink max-w-xl align-baseline bg-cream2 rounded-3xl">
        <p className="text-6xl text-cblue font-sans font-bold p-3">About</p>
        <h1 className="text-2xl text-grey-400 font-sans font-semibold p-5">
          Explore the heart of campus life: Your ultimate guide to every club and event at RGUKT Basar
        </h1>
        <p className="text-xl text-grey-400 font-sans text-left p-3">
          At Club Council, we're all about making campus life exciting and accessible. 
          Explore our directory, join clubs, and stay updated on events that matter to you.
        </p>
        <p className="text-xl text-grey-400 font-sans text-left p-3">
          It's your doorway to meeting new people and creating lasting memories.
        </p>
        
      </div>
    </div>
    <h1 className="font-bold text-wrap text-6xl font-sans text-maroon mt-28 relative">
          Life at RGUKT Basar
        </h1> 
    <div className="flex mb-12 mt-20">
          <div className="bg-blue-100 w-3/4 rounded-xl flex flex-col items-center justify-around mr-4 h-80">
            <div className="bg-blue-200 rounded-full p-4 mt-2">
            <img src={Dance} alt=" " className='image'/>
            </div>
            <div className=" ">
              <h1 className="text-blue-800 font-bold text-4xl text-center pb-2">
              Cultural Clubs
              </h1>
              <p className="text-blue-600 font-semibold text-center">Unveil your passion <br/>
              Feed your hobbies </p>
            </div>
          </div>
          <div className="bg-cpeach3 w-3/4 rounded-xl flex flex-col items-center justify-around mr-4 h-80">
            <div className="bg-cream rounded-full p-4 mt-2">
              <img src={Techies} alt=" " className='image'/>
            </div>
            <div className=" ">
              <h1 className="text-gray-700 font-bold text-4xl text-center pb-2">
                Technical Clubs
              </h1>
              <p className="text-gray-600 font-semibold text-center">Dive deeper into your domain and entrepreneurship</p>
            </div>
          </div>
          <div className="bg-gray-100 w-3/4 rounded-xl flex flex-col items-center justify-around mr-4 h-80">
            <div className="bg-gray-200 rounded-full p-4 mt-2 ">
              <img src={Service} alt=" " className='image'/>
            </div>
            <div className=" ">
              <h1 className="text-gray-800 font-bold text-4xl text-center pb-2">
                Service Clubs
              </h1>
              <p className="text-gray-500 font-semibold text-center" >Volunteer for the better tomorrow</p>
            </div>
          </div>
        </div>
        <h1 className="font-bold text-wrap text-center text-4xl font-sans text-darkBlue mt-28 relative">
          For any queries contact <br/> Team Kavach
        </h1>
    </div>

    
  );
}

export default LandingPage