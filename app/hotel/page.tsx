'use client';
import Image from "next/image";
import Navbar from "../components/navbar";
import { useUserContext } from "../config/userContext";
import Link from "next/link";

const Hotel = () => {

  const {plan} = useUserContext();

  return(
    <>
      <div className="plans h-screen bg-[url('https://4kwallpapers.com/images/wallpapers/stars-galaxy-2560x1440-10307.jpg')]">
      <Navbar />
        <div className="flex flex-col justify-evenly text-center max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 font-mono h-full">

          {/* Conditionally render the correct hotel based on chosen plan from context */}

          { plan == "Bronze" &&
          <>
              <div className="flex flex-col text-center">
                <p className="text-white text-2xl pb-3">You will be staying at:</p>
                <h1 className="font-bold text-white text-5xl pt-3">The Crappy Hotel</h1>
              </div>
              <div className="flex flex-col md:flex-row justify-between ">
                <div className="flex flex-col text-center w-1/2 border border-white rounded-md text-white">
                <h1 className=" text-5xl font-bold py-5">Amenities</h1>
                  <p className=" py-5">amenity</p>
                  <p className=" py-5">amenity</p>
                  <p className=" py-5">amenity</p>
                  <p className=" py-5">amenity</p>
                </div>
                <div className="flex flex-col justify-between">
                  <img className="w-1/2 ml-auto py-3 border border-white rounded-md" src="https://images.squarespace-cdn.com/content/v1/56a6579ab204d52e0646b187/1527988583024-GLIX35EXJQ3ESVA5P16I/SpaceXArch0Final_Jason.jpg?format=1000w" alt="" />
                  <img className="w-1/2 ml-auto py-3 border border-white rounded-md" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b959f3b-9936-469e-982d-79ab99698fe8/dey45d8-2a2ffa8c-a5e8-4baf-8076-5a23cd24ce7d.png/v1/fill/w_1280,h_966,q_80,strp/cyberpunk_apartment_small_by_vampiricsaviour_dey45d8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTY2IiwicGF0aCI6IlwvZlwvNWI5NTlmM2ItOTkzNi00NjllLTk4MmQtNzlhYjk5Njk4ZmU4XC9kZXk0NWQ4LTJhMmZmYThjLWE1ZTgtNGJhZi04MDc2LTVhMjNjZDI0Y2U3ZC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.oKQOI2D730flktgHMHBDbUCmpfwwjiWBE1aQnmWDhk0" alt="" />
                </div>
              </div>
              <Link href="/payment" className="py-3 bg-white text-black font-bold border border-black rounded-lg hover:bg-slate-600 mb-5">Continue to payment</Link>
          </> 
          }

            {/* TODO */}
          { plan == "Silver" &&
          <>
            <div className="flex flex-col text-center">
              <p className="text-white text-2xl pb-3">You will be staying at:</p>
              <h1 className="font-bold text-white text-5xl pt-3">The Crappy Hotel</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-between ">
              <div className="flex flex-col text-center w-1/2 border border-white rounded-md text-white">
              <h1 className=" text-5xl font-bold py-5">Amenities</h1>
                <p className=" py-5">amenity</p>
                <p className=" py-5">amenity</p>
                <p className=" py-5">amenity</p>
                <p className=" py-5">amenity</p>
              </div>
              <div className="flex flex-col justify-between">
                <img className="w-1/2 ml-auto py-3 border border-white rounded-md" src="https://images.squarespace-cdn.com/content/v1/56a6579ab204d52e0646b187/1527988583024-GLIX35EXJQ3ESVA5P16I/SpaceXArch0Final_Jason.jpg?format=1000w" alt="" />
                <img className="w-1/2 ml-auto py-3 border border-white rounded-md" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b959f3b-9936-469e-982d-79ab99698fe8/dey45d8-2a2ffa8c-a5e8-4baf-8076-5a23cd24ce7d.png/v1/fill/w_1280,h_966,q_80,strp/cyberpunk_apartment_small_by_vampiricsaviour_dey45d8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTY2IiwicGF0aCI6IlwvZlwvNWI5NTlmM2ItOTkzNi00NjllLTk4MmQtNzlhYjk5Njk4ZmU4XC9kZXk0NWQ4LTJhMmZmYThjLWE1ZTgtNGJhZi04MDc2LTVhMjNjZDI0Y2U3ZC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.oKQOI2D730flktgHMHBDbUCmpfwwjiWBE1aQnmWDhk0" alt="" />
              </div>
            </div>
            <Link href="/payment" className="py-3 bg-white text-black font-bold border border-black rounded-lg hover:bg-slate-600 mb-5">Continue to payment</Link>
      </> 
          }

          { plan == "Gold" &&
          <>
            <div className="flex flex-col text-center">
              <p className="text-white text-2xl pb-3">You will be staying at:</p>
              <h1 className="font-bold text-white text-5xl pt-3">The Crappy Hotel</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-between ">
              <div className="flex flex-col text-center w-1/2 border border-white rounded-md text-white">
              <h1 className=" text-5xl font-bold py-5">Amenities</h1>
                <p className=" py-5">amenity</p>
                <p className=" py-5">amenity</p>
                <p className=" py-5">amenity</p>
                <p className=" py-5">amenity</p>
              </div>
              <div className="flex flex-col justify-between">
                <img className="w-1/2 ml-auto py-3 border border-white rounded-md" src="https://images.squarespace-cdn.com/content/v1/56a6579ab204d52e0646b187/1527988583024-GLIX35EXJQ3ESVA5P16I/SpaceXArch0Final_Jason.jpg?format=1000w" alt="" />
                <img className="w-1/2 ml-auto py-3 border border-white rounded-md" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b959f3b-9936-469e-982d-79ab99698fe8/dey45d8-2a2ffa8c-a5e8-4baf-8076-5a23cd24ce7d.png/v1/fill/w_1280,h_966,q_80,strp/cyberpunk_apartment_small_by_vampiricsaviour_dey45d8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTY2IiwicGF0aCI6IlwvZlwvNWI5NTlmM2ItOTkzNi00NjllLTk4MmQtNzlhYjk5Njk4ZmU4XC9kZXk0NWQ4LTJhMmZmYThjLWE1ZTgtNGJhZi04MDc2LTVhMjNjZDI0Y2U3ZC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.oKQOI2D730flktgHMHBDbUCmpfwwjiWBE1aQnmWDhk0" alt="" />
              </div>
            </div>
            <Link href="/payment" className="py-3 bg-white text-black font-bold border border-black rounded-lg hover:bg-slate-600 mb-5">Continue to payment</Link>
      </> 
          }

        </div>
      </div>
    </>
  );
}

export default Hotel;