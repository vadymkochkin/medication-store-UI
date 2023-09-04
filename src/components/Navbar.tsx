import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
// import { useSession, signOut } from "next-auth/react"
// import { selectAuthState, setAuthState } from "../store/authSlice";
// import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
    // const authState = useSelector(selectAuthState);
    // const dispatch = useDispatch();
    // const { data: session } = useSession();
    const router = useRouter();
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMobileMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className="relative bg-white">
            <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="border-b border-gray-200">
                    <div className="flex h-16 items-center">

                        <div className="ml-4 flex lg:ml-0">
                            <a href="#">
                                <span className="sr-only">Uplink Health</span>
                                <img className="w-auto" src="/imgs/logo.png" alt="" />
                            </a>
                        </div>

                        <div className="ml-auto flex items-center">
                            <div className={`hidden lg:ml-8 lg:block lg:self-stretch`} id="navbar-sticky">
                                <div className="flex h-full space-x-8 navigation-container flex-col md:flex-row">
                                    <Link href="/" className={`flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 ${router.pathname == "/" ? "active" : ""}`}>Home</Link>

                                    <Link href="#" className={`flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 ${router.pathname == "/#" ? "active" : ""}`}>About Us</Link>

                                    <Link href="/product-tadalafil" className={`flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 ${router.pathname.indexOf("/product-") > -1 ? "active" : ""}`}>Product</Link>

                                    <Link href="/faq" className={`flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 ${router.pathname == "/faq" ? "active" : ""}`}>FAQ</Link>
                                </div>
                            </div>

                            <div className="flex ml-6">
                                <a href="/auth/login" className="pointer-events-auto rounded-full py-2 px-2 lg:px-8 text-center text-[0.8125rem] font-semibold leading-5 text-white get-started-btn w-28 lg:w-36">
                                    Get Started
                                </a>
                            </div>

                            <div className="hidden lg:flex lg:ml-6">
                                <img className="h-5 w-auto" src="/imgs/cart.png" alt="" />
                                <div className="badge-container">
                                    <span className="badge badge-success">0</span>
                                </div>
                            </div>

                            <div className="hidden lg:flex items-center ml-24">
                                <img className="h-5 w-auto" src="/imgs/phone.png" alt="" />
                                <span className="ml-3 font-weight-500">888-536-2267</span>
                            </div>
                        </div>
                        <button type="button" className="rounded-md bg-white p-2 text-gray-400 lg:hidden" onClick={handleShowMobileMenu} data-collapse-toggle="navbar-sticky" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={`bg-white lg:hidden absolute w-full p-4 pb-8 left-0 shadow-xl ${showMenu ? 'block' : 'hidden'}`}>
                    <div className="flex justify-between items-center px-4">
                        <div className="flex items-center justify-center">
                            <img className="h-5 w-auto" src="/imgs/phone.png" alt="" />
                            <span className="ml-3 font-weight-500">888-536-2267</span>
                        </div>

                        <div className="lg:flex lg:ml-6">
                            <img className="h-5 w-auto" src="/imgs/cart.png" alt="" />
                            <div className="badge-container">
                                <span className="badge badge-success">0</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col px-2 my-4">
                        <Link href="/" className={`flex items-center p-2 font-bold text-gray-700 hover:text-gray-800 rounded-sm ${router.pathname == "/" ? "bg-gray-100" : ""}`}>Home</Link>

                        <Link href="#" className={`flex items-center p-2 font-bold text-gray-700 hover:text-gray-800 rounded-sm ${router.pathname == "/#" ? "bg-gray-100" : ""}`}>About Us</Link>

                        <Link href="/product-tadalafil" className={`flex items-center p-2 font-bold text-gray-700 hover:text-gray-800 rounded-sm ${router.pathname.indexOf("/product-") > -1 ? "bg-gray-100" : ""}`}>Product</Link>

                        <Link href="/faq" className={`flex items-center p-2 font-bold text-gray-700 hover:text-gray-800 rounded-sm ${router.pathname == "/faq" ? "bg-gray-100" : ""}`}>FAQ</Link>
                    </div>


                </div>
            </nav>
            <p className="flex items-center justify-center px-4 font-medium text-white text-sm lg:text-lg sm:px-6 lg:px-8 alert-banner py-2 text-center">
                Pay 90% less than brand name medication, plus free shipping on all orders.
            </p>
        </header>
    )
}

export default Navbar;