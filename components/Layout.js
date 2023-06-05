import Navbar from "@/pages/Navbar"

export default function Layout( {children} ){
    return (
    <>
        <Navbar/>
        <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-6xl m-auto mt-3 mb-6 px-1">
            <main>{children}</main>
        </div>
    </>
    )

    
}