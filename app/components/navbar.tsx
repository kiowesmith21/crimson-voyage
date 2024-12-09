import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return(
    <>
        <div className="navbar">
            <div className="flex flex-col md:flex-row text-white justify-center space-x-20 p-5 text-4xl  font-mono">
                <Link href="/" className="hover:text-orange-700">Home</Link>
                <Link href="/plans" className="hover:text-orange-700">Plans</Link>
                <Link href="/guide" className="hover:text-orange-700">Guide</Link>
            </div>
        </div>
    </>
  );
}

export default Navbar;