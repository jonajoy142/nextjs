import Link from "next/link";
const Navbar = () => {
    return (  
        <nav >
            <div className="logo" >
                <h1>
                    Home
                </h1>
                <Link href="/">Home</Link>
                <Link href="/next/test">Test</Link>
                <Link href="/about">About</Link>
                <Link href="/next">Ninjas Listing</Link>
            </div>
        </nav>
        
    );
}
 
export default Navbar;