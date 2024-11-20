import React from "react";
import pic from "../assets/img/depositphotos_150617828-stock-photo-soccer-ball-on-grass.jpg";
import pic1 from "../assets/img/depositphotos_8307714-stock-photo-cricket-ball.jpg";
import pic2 from "../assets/img/photo-1494199505258-5f95387f933c.jpeg";
import pic4 from "../assets/img/photo-1721760886713-1ab0c5045bf7.jpeg";
import pic3 from "../assets/img/premium_photo-1666913667082-c1fecc45275d.jpeg";

const Sports = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-green-500 via-blue-400 to-gray-500 py-20">
            <div className="max-w-6xl mx-auto text-center px-4">
                {/* Header Section */}
                <h1 className="text-5xl font-extrabold text-white mb-8 tracking-wide">
                    TurfHub Sports
                </h1>
                <p className="text-lg text-white mb-10 leading-relaxed">
                    Book your favorite turf and enjoy a variety of exciting sports games
                    with friends, family, or teammates. We provide a range of turf games
                    in top-class facilities across the country.
                </p>

                {/* Sports Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Football */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                        <img
                            src={pic}
                            alt="Football"
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Football</h2>
                        <p className="text-gray-600 mb-4">
                            Experience the thrill of football on well-maintained turfs.
                            Whether it's a casual match or a competitive game, TurfHub
                            provides excellent facilities for football enthusiasts.
                        </p>
                        <a
                            href="/bookings"
                            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-md transition-all duration-300"
                        >
                            Book Now
                        </a>
                    </div>

                    {/* Cricket */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                        <img
                            src={pic1}
                            alt="Cricket"
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Cricket</h2>
                        <p className="text-gray-600 mb-4">
                            Get ready to hit a six or bowl a perfect delivery! Our cricket
                            turfs are designed to give you a professional experience. Gather
                            your team and make it an unforgettable game.
                        </p>
                        <a
                            href="/booking/cricket"
                            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-md transition-all duration-300"
                        >
                            Book Now
                        </a>
                    </div>

                    {/* Basketball */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                        <img
                            src={pic2}
                            alt="Basketball"
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            Basketball
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Whether you're playing a pickup game or organizing a tournament,
                            our basketball turfs offer top-notch facilities for all levels of
                            play.
                        </p>
                        <a
                            href="/booking/basketball"
                            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-md transition-all duration-300"
                        >
                            Book Now
                        </a>
                    </div>

                    {/* Tennis */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                        <img
                            src={pic3}
                            alt="Tennis"
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Tennis</h2>
                        <p className="text-gray-600 mb-4">
                            Challenge your skills on well-maintained tennis courts. Whether
                            you're a beginner or a pro, TurfHub offers facilities suited for
                            all players.
                        </p>
                        <a
                            href="/booking/tennis"
                            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-md transition-all duration-300"
                        >
                            Book Now
                        </a>
                    </div>

                    {/* Badminton */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                        <img
                            src={pic4}
                            alt="Badminton"
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            Badminton
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Enjoy a fast-paced game of badminton on our well-lit courts.
                            Whether it's a singles match or doubles, we provide the perfect
                            turf for your game.
                        </p>
                        <a
                            href="/booking/badminton"
                            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-md transition-all duration-300"
                        >
                            Book Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sports;
