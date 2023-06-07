import React, { useEffect, useState } from "react";
import axios from "axios";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import DefaultLayoutHoc from "../layout/Default.layout";

const HomePage = () => {
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premierMovies, setPremierMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

    useEffect(() => {
        const requestTopRatedMovies = async () => {
            const topRatedMovies = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=da7c1e9081426da5ed14725b6f389c25");
            setRecommendedMovies(topRatedMovies.data.results);
        };

        requestTopRatedMovies();
    }, []);

    return (
        <>
            <HeroCarousel />
            <div className="container mx-auto px-4 md:px-12 my-8">
                <PosterSlider title="Recommended Movies" subtitle="List of recommended movies" poster={recommendedMovies} isDark={false} />
            </div>
            <div className="container mx-auto px-4 md:px-12 my-8">
                <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
                    The Best of Live Events
                </h1>
                <EntertainmentCardSlider />
            </div>
            <div className="bg-premier-800 py-12">
                <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
                    <div className="hidden md:flex">
                        <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Rupay" className="w-full h-full" />
                    </div>
                    <PosterSlider title="Premiers" subtitle="Brand new releases every Friday" poster={premierMovies} isDark={true} />
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-12 my-8">
                <PosterSlider title="Online Streaming Event" subtitle="" poster={onlineStreamEvents} isDark={false} />
            </div>
        </>
    )
};

export default DefaultLayoutHoc(HomePage);