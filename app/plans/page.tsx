import Image from "next/image";
import Navbar from "../components/navbar";

const Plans = () => {
  return(
    <>
      <div className="plans h-screen bg-[url('https://4kwallpapers.com/images/wallpapers/stars-galaxy-2560x1440-10307.jpg')]">
        <Navbar />
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 font-mono">
          <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-orange-700">Your Luxurious Journey to the Red Planet Awaits.</h1>
              <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white">Experience the ultimate in interplanetary travel with tailored itineraries, premium accommodations, and unparalleled comfort on your Martian adventure.</p>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black bg-white border border-gray-300 rounded-lg hover:bg-gray-300 focus:ring-4 focus:ring-gray-100  dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                  Plan asdasd
              </a> 
          </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="https://i.pinimg.com/originals/f8/d6/88/f8d688b8b4c45922162154b35763e04c.png" alt="mockup" />
            </div>                
          </div>
      </div>
    </>
  );
}

export default Plans;