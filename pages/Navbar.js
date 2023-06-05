import Link from "next/link";
import styles from "../styles/nav.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Navbar(){
    const [navbar, setNavbar] = useState(false);

    function navbarToggle(){
        setNavbar((display) => !display)
    }

    return (
        <>
            <header className={`sticky top-0 p-5 flex flex-col md:flex-row md:justify-between gap-5 ${navbar && 'h-screen md:h-max'} bg-[#27374D]`}>
                <div className="flex justify-between items-center">
                    <Link href = '/' className="!text-[#DDE6ED] flex gap-2 items-center">
                        <Image src = "/images/pokeball.svg" alt='Pokeball' height={28} width={28} />
                        <h2 className="font-semibold text-2xl">POKEKINGIN</h2>
                    </Link>
                    <Image className="md:hidden" onClick={navbarToggle} src={navbar ? "/images/close.svg":"/images/hamburger.svg"} height={24} width={24} alt="Menu"/>
                </div>

                <nav className={`${!navbar && 'hidden'} md:block`}>
                    <ul className="md:flex md:items-center">
                        <li className="pb-5 md:pb-0 mr-10 "><Link href = '/' className="!text-[#DDE6ED] hover:!text-[#FFD95A] transition-all">Home</Link></li>
                        <li className="pb-5 md:pb-0 mr-10 "><Link href = '/Favourites' className="!text-[#DDE6ED] hover:!text-[#FFD95A] transition-all">Favourites</Link></li>
                        <li className="pb-5 md:pb-0 mr-10 transition-all"><Link href='https://www.instagram.com/vivekingin0/'><button className="rounded bg-slate-400 px-4 py-1">Contact Me</button></Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}