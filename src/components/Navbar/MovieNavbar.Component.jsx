import React, { useContext } from "react";
import { BiCaretDown, BiMenu, BiSearch, BiShareAlt } from "react-icons/bi";
import { MovieContext } from "../../context/Movie.Context";

const NavSmall = () => {
    const { movie } = useContext(MovieContext);

    return (
        <>
            <div className="text-gray-700 flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold">
                        {movie.original_title}
                    </h3>
                </div>
                <div className="w-8 h-8">
                    <BiShareAlt className="w-full h-full" />
                </div>
            </div>
        </>
    )
};

const NavLarge = () => {
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
                    <button className="bg-red-500 text-white px-2 py-1 text-sm rounded hover:bg-red-700">
                        Sign in
                    </button>
                    <div className="w-8 h-8 text-white">
                        <BiMenu className="w-full h-full" />
                    </div>
                </div>
            </div>
        </>
    )

};
const MovieNavbar = () => {
    return (
        <nav className="bg-white border-b-2 lg:border-b-0 lg:bg-darkBackground-700 p-4">
            <div className="lg:hidden">
                <NavSmall />
            </div>
            <div className="hidden md:hidden lg:flex">
                <NavLarge />
            </div>
        </nav>
    )
};

export default MovieNavbar;