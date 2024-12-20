'use client';
import Image from "next/image";
import Navbar from "../components/navbar";
import { useUserContext } from "../config/userContext";
import SpaceCraft from "./spacecraft";

const Plans = () => {

  const {plan, updateInfo} = useUserContext();

  function choosePlan(newPlan: string) {
    updateInfo(newPlan);
    console.log(plan)
  }

  return(
    <>
      <div className="plans h-screen bg-[url('https://4kwallpapers.com/images/wallpapers/stars-galaxy-2560x1440-10307.jpg')]">
        <Navbar />
        {/* conditionally render each component based on what step user is on ie. what they have clicked and whats in their user context */}

      {/* Plans */}
      {plan == "DefaultPlan" &&

        <div className="flex flex-col md:flex-row justify-between max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 font-mono h-full">
          <div className="max-w-sm bg-gray-950 border border-gray-200 rounded-lg shadow flex flex-col h-5/6 w-1/3 justify-between text-center">
            <div className="flex flex-col bg-amber-700 rounded-t-lg p-5 justify-center">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Bronze</h5>
            </div>
            <p className="mb-3 font-normal text-white ">Here are the biggest</p>
            <p className="mb-3 font-normal text-white ">Here are the biggest </p>
            <p className="mb-3 font-normal text-white ">Here are the biggest </p>
            <p className="mb-3 font-normal text-white ">Here are the biggest </p>
            <h1 className="font-bold text-white text-2xl">Price: $10,000 USD</h1>
            <div className="flex flex-col justify-center p-5">
              <button onClick={() => choosePlan("Bronze")} className="px-3 py-2 text-sm font-bold text-center text-white bg-amber-700 rounded-lg hover:bg-amber-950 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Choose This Plan
              </button>
            </div>
          </div>

          <div className="max-w-sm bg-gray-950 border border-gray-200 rounded-lg shadow flex flex-col h-5/6 w-1/3 justify-between text-center">
            <div className="flex flex-col bg-slate-400 rounded-t-lg p-5 justify-center">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Silver</h5>
            </div>
            <p className="mb-3 font-normal text-white ">Here are the biggest</p>
            <p className="mb-3 font-normal text-white ">Here are the biggest </p>
            <p className="mb-3 font-normal text-white ">Here are the biggest </p>
            <p className="mb-3 font-normal text-white ">Here are the biggest </p>
            <h1 className="font-bold text-white text-2xl">Price: $30,000 USD</h1>
            <div className="flex flex-col justify-center p-5">
              <button onClick={() => choosePlan("Silver")} className="px-3 py-2 text-sm font-bold text-center text-white bg-slate-400 rounded-lg hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Choose This Plan
              </button>
            </div>
          </div>

          <div className="max-w-sm bg-gray-950 border border-gray-200 rounded-lg shadow flex flex-col h-5/6 w-1/3 justify-between text-center">
            <div className="flex flex-col bg-amber-400 rounded-t-lg p-5 justify-center">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Gold</h5>
            </div>
            <p className="mb-3 font-normal text-white ">Here are the biggest</p>
            <p className="mb-3 font-normal text-white ">Here are the biggest </p>
            <p className="mb-3 font-normal text-white ">Here are the biggest </p>
            <p className="mb-3 font-normal text-white ">Here are the biggest </p>
            <h1 className="font-bold text-white text-2xl">Price: $50,000 USD</h1>
            <div className="flex flex-col justify-center p-5">
              <button onClick={() => choosePlan("Gold")} className="px-3 py-2 text-sm font-bold text-center text-white bg-amber-400 rounded-lg hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Choose This Plan
              </button>
            </div>
          </div>
        </div>
      } 

        {/* Spacecraft */}

        {plan != "DefaultPlan" && 
          <SpaceCraft />
        }

      
      </div>
    </>
  );
}

export default Plans;