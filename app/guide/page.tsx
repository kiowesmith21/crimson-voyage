'use client'

import Image from "next/image";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
require('dotenv').config

const Guide = () => {

    const [planetImageUrl, setplanetImageUrl] = useState({});

    const getPlanetImage = async () => {
        const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.NASA_API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData);
        setplanetImageUrl(jsonData);
      };

    useEffect(() => {
        getPlanetImage();
    }, []);

  return(
    <>
      <div className="home h-screen bg-[url('https://4kwallpapers.com/images/wallpapers/stars-galaxy-2560x1440-10307.jpg')]">
        <Navbar />
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 font-mono">
            guide            
          </div>
      </div>
    </>
  );
}

export default Guide;