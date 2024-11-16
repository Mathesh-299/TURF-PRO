import React from 'react';

const Sports = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-green-400 to-red-400 py-20">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-4xl font-extrabold text-white mb-8">TurfHub Sports</h1>
                <p className="text-lg text-white mb-6">Book your favorite turf and enjoy a variety of exciting sports games with friends, family, or teammates. We provide a range of turf games that you can play and enjoy in top-class facilities across the country.</p>

                {/* Sports Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
                    {/* Football */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img src="https://example.com/football.jpg" alt="Football" className="w-full h-48 object-cover rounded-md mb-4" />
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Football</h2>
                        <p className="text-gray-600 mb-4">Experience the thrill of football on well-maintained turfs. Whether it's a casual match or a competitive game, TurfHub provides excellent facilities for football enthusiasts.</p>
                        <a href="/bookings" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Book Now</a>
                    </div>

                    {/* Cricket */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img src="https://example.com/cricket.jpg" alt="Cricket" className="w-full h-48 object-cover rounded-md mb-4" />
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Cricket</h2>
                        <p className="text-gray-600 mb-4">Get ready to hit a six or bowl a perfect delivery! Our cricket turfs are designed to give you a professional experience. Gather your team and make it an unforgettable game.</p>
                        <a href="/booking/cricket" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Book Now</a>
                    </div>

                    {/* Basketball */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img src="https://example.com/basketball.jpg" alt="Basketball" className="w-full h-48 object-cover rounded-md mb-4" />
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Basketball</h2>
                        <p className="text-gray-600 mb-4">Whether you're playing a pickup game or organizing a tournament, our basketball turfs offer top-notch facilities for all levels of play.</p>
                        <a href="/booking/basketball" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Book Now</a>
                    </div>

                    {/* Tennis */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img src="https://example.com/tennis.jpg" alt="Tennis" className="w-full h-48 object-cover rounded-md mb-4" />
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Tennis</h2>
                        <p className="text-gray-600 mb-4">Challenge your skills on well-maintained tennis courts. Whether you're a beginner or a pro, TurfHub offers facilities suited for all players.</p>
                        <a href="/booking/tennis" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Book Now</a>
                    </div>

                    {/* Badminton */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img src="https://example.com/badminton.jpg" alt="Badminton" className="w-full h-48 object-cover rounded-md mb-4" />
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Badminton</h2>
                        <p className="text-gray-600 mb-4">Enjoy a fast-paced game of badminton on our well-lit courts. Whether it's a singles match or doubles, we provide the perfect turf for your game.</p>
                        <a href="/booking/badminton" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Book Now</a>
                    </div>

                    {/* Hockey */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img src="https://example.com/hockey.jpg" alt="Hockey" className="w-full h-48 object-cover rounded-md mb-4" />
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Hockey</h2>
                        <p className="text-gray-600 mb-4">Unleash your inner athlete with a game of hockey on our pristine turfs. Perfect for team play or casual games, TurfHub has you covered for every match.</p>
                        <a href="/booking/hockey" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sports;
