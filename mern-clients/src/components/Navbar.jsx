import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// react icons
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
// import '../App.css';
import { AuthContext } from '../contects/AuthProvider';
import { useContext } from 'react'; 
import { FaCartShopping } from 'react-icons/fa6';
import { CartContext } from '../Cart/CartContext'; // Import Cart Context
            

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const {user} = useContext(AuthContext);
    console.log(user);
    const { cartItems } = useContext(CartContext);

    // Toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    // Handle scroll for sticky navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // Nav items
    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "Sell Your Book", path: "/admin/dashboard" },
        { link: "Blog", path: "/blog" },
    ];

    return (
        <header className='w-full fixed top-0 right-0 z-50'>
            <nav className={`py-4 px-6 md:px-16 lg:px-24 transition-all duration-300 ${isSticky ? "bg-blue-300 shadow-md" : "bg-transparent"}`}>
                <div className='flex justify-between items-center'>
                    {/* Logo */}
                    <Link to="/" className='logo text-2xl font-bold text-blue-700 flex items-center gap-2'>
                        <FaBlog className='inline-block' /> Books
                    </Link>

                    {/* Desktop Nav Items */}
                    <ul className='md:flex space-x-8 hidden'>
                        {navItems.map(({ link, path }) => (
                            <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>
                                {link}
                            </Link>
                        ))}
                    </ul>
                    {/* Cart Button */}
                    <div className="relative">
                       <Link to="/cart" className="relative">
                          <FaCartShopping className='w-5 h-5 text-blue-700' />
                          {cartItems.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                              {cartItems.length}
                            </span>
                          )}
                        </Link>
                    </div>

                    {/* Auth Buttons */}
                    <div className='space-x-12 hidden md:flex items-center'>
                        <button><FaBarsStaggered className='w-5 hover:text-blue-700' /></button>
                        {/* {
                            user ? user.email:""
                        } */}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {isMenuOpen ? (
                                <FaXmark className='h-6 w-6 text-black' />
                            ) : (
                                <FaBarsStaggered className='h-6 w-6 text-black' />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className='md:hidden bg-blue-700 mt-2 py-4 space-y-4'>
                        {navItems.map(({ link, path }) => (
                            <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer hover:text-blue-300'>
                                {link}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Navbar;
