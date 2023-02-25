import Link from "next/link"
import Image from 'next/image'
const Navbar = () => {
    return (  
        <nav >
            <div className="logo" >
                <img src="/logo.png" />
            <Image
               src="/logo.png"
               alt="Picture of the author"
               width={100}
               height={100}
            />
                
                {/* <h1>
                    Home
                </h1> */}
                <Link href="/">Home</Link>
                <Link href="/">Home</Link>
                <Link href="/next/test">Test</Link>
                <Link href="/about">About</Link>
                <Link href="/next">Ninjas Listing</Link>
            </div>
        </nav>
        
    );
}
 
export default Navbar;