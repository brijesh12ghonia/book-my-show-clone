import React from 'react';
import { BiCaretDown, BiSearch, BiMenu } from 'react-icons/bi';

function NavSmall() {
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold">
                        It All Starts Here!
                    </h3>
                    <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
                        Mumbai <BiCaretDown />
                    </span>
                </div>
                <div className="w-8 h-8">
                    <BiSearch className="w-full h-full" />
                </div>
            </div>
        </>
    )
}

function NavMedium() {
    return (
        <>
            <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
                <BiSearch />
                <input type="search" className="w-full bg-transparent border-none focus:outline-none" />
            </div>
        </>
    )
}

function NavLarge() {
    return (
        <>
            <div className="container flex mx-auto px-4 items-center justify-between">
                <div className="flex items-center w-1/2 gap-3">
                    <div className="w-10 h-10">
                        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/home-selected-collection-202302270255.png" alt="Logo" className="w-full h-full" />
                    </div>
                    <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
                        <BiSearch />
                        <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search for Movies, Events, PLays, Sports and Activities" />
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white gap-1">
                        Mumbai <BiCaretDown />
                    </span>
                    <button className="bg-red-500 text-white px-2 py-1 text-sm rounded">
                        Sign in
                    </button>
                    <div className="w-8 h-8 text-white">
                        <BiMenu className="w-full h-full" />
                    </div>
                </div>
            </div>
        </>
    )
}

const Navbar = () => {
    return (
        <nav className="bg-darkBackground-700 px-4 py-3">
            <div className="md:hidden">
                <NavSmall />
            </div>
            <div className="hidden md:flex lg:hidden">
                <NavMedium />
            </div>
            <div className="hidden w-full lg:flex">
                <NavLarge />
            </div>
        </nav>
    )
};

export default Navbar;