'use client';
import Image from "next/image";
import Navbar from "../components/navbar";
import { useUserContext } from "../config/userContext";
import Link from "next/link";

const Confirmation = () => {

  const {plan} = useUserContext();

  return(
    <>
      <div className="plans h-screen bg-[url('https://4kwallpapers.com/images/wallpapers/stars-galaxy-2560x1440-10307.jpg')]">
      <Navbar />
       
        <div className="flex flex-col justify-between text-center max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 font-mono h-full">

          {/* Conditionally render the correct spacecraft/hotel based on chosen plan from context */}
          {/* Conditionally render the correct payment type based on chosen payment type from context */}

          {/* TODO MAKE "CANCEL TRANSACTION BUTTON" that resets the plan and payment info and links back to "plans" page */}

          { plan == "Bronze" &&
          <>
            <div className="flex flex-col justify-between text-center">
                <p className="text-white text-2xl pb-3">You will be flying on:</p>
                <h1 className="font-bold text-white text-5xl py-3">The SpaceX Starship</h1>
                <img className="w-1/2 m-auto py-3" src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Starship_S20.jpg" alt="" />
                <p className="text-white py-5">Description of Spacecraft</p>
                <Link href="/hotel" className="py-3 bg-white text-black font-bold border border-black rounded-lg hover:bg-slate-600 mb-5">Continue</Link>
            </div>
          </> 
          }

          { plan == "Silver" &&
          <>
            <div className="flex flex-col justify-between text-center">
                <p className="text-white text-2xl pb-3">You will be flying on:</p>
                <h1 className="font-bold text-white text-5xl py-3">The SpaceX Starship</h1>
                <img className="w-1/2 m-auto py-3" src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Starship_S20.jpg" alt="" />
                <p className="text-white py-5">Description of Spacecraft</p>
                <Link href="/hotel" className="py-3 bg-white text-black font-bold border border-black rounded-lg hover:bg-slate-600 mb-5">Continue</Link>
            </div>
          </> 
          }

          { plan == "Gold" &&
          <>
            <div className="flex flex-col justify-between text-center">
                <p className="text-white text-2xl pb-3">You will be flying on:</p>
                <h1 className="font-bold text-white text-5xl py-3">The SpaceX Starship</h1>
                <img className="w-1/2 m-auto py-3" src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Starship_S20.jpg" alt="" />
                <p className="text-white py-5">Description of Spacecraft</p>
                <Link href="/hotel" className="py-3 bg-white text-black font-bold border border-black rounded-lg hover:bg-slate-600 mb-5">Continue</Link>
            </div>
          </> 
          }

        </div>
      </div>
    </>
  );
}

export default Confirmation;