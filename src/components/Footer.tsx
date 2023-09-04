const Footer = () => {
    return (
        <footer className="w-full footer-container">
            <div className="w-full">
                <div className="mx-auto container md:flex md:justify-between p-6 sm:p-6">
                    <div className="flex flex-1 mb-6 md:mb-0 lg:justify-center">
                        <a href="/" className="flex items-center">
                            <img src="/imgs/logo-white.png" className="h-8 mr-3" alt="FlowBite Logo" />
                        </a>
                    </div>
                    <div className="flex flex-1 flex-col lg:flex-row">
                        <div className="flex flex-1 flex-col">
                            <h2 className="mb-4 text-sm font-semibold uppercase text-white">Nav Link</h2>
                            <ul className="text-white">
                                <li className="my-1">
                                    <a href="/" className="hover:underline">Home</a>
                                </li>
                                <li className="my-1">
                                    <a href="/aboutus" className="hover:underline">About Us</a>
                                </li>
                                <li className="my-1">
                                    <a href="/product" className="hover:underline">Product</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-1 flex-col mt-4 lg:mt-0">
                            <h2 className="mb-4 text-sm font-semibold text-white uppercase dark:text-white">Quick Link</h2>
                            <ul className="text-white">
                                <li className="my-1">
                                    <a href="/register" className="hover:underline ">Registration</a>
                                </li>
                                <li className="my-1">
                                    <a href="/faq" className="hover:underline">FAQ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-center mb-6 px-6">
                    <span className="text-sm text-white font-weight-600 sm:text-center">Copyright © 2023 by <a href="https://uplink-health.com/" className="hover:underline">Uplink-health.com</a> | All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;