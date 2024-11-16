import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-orange-500 to-green-500 flex flex-col">
            <div className="flex-grow pt-24 px-4">
                <div className="bg-white p-8 rounded-lg shadow-xl max-w-3xl mx-auto">
                    <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-6">About TurfHub India</h1>
                    <p className="text-lg text-gray-800 mb-6">
                        TurfHub India is dedicated to promoting sports and fitness by making turf bookings easier for
                        players across the country. From the bustling streets of Mumbai to the cultural heart of Chennai,
                        TurfHub serves as the go-to platform for turf bookings, tournaments, and community sports events.
                        We aim to create a space where sports enthusiasts can connect and enjoy their favorite games, 
                        all while embracing the vibrant spirit of India.
                    </p>

                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        TurfHub India is committed to making sports more accessible across every corner of the country.
                        Whether you're in a metro city or a small town, we provide a platform that brings people together,
                        encourages a healthy lifestyle, and fosters team spirit through sports. Our mission is to empower
                        individuals and communities by offering an easy-to-use platform for turf bookings, with an emphasis
                        on local engagement and cultural diversity.
                    </p>

                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Core Values</h2>
                    <ul className="list-disc list-inside text-lg text-gray-600 mb-6">
                        <li><span className="font-semibold">Unity in Diversity:</span> Embracing India's cultural diversity through sports.</li>
                        <li><span className="font-semibold">Passion for Sports:</span> Sports are the heart of India's community culture.</li>
                        <li><span className="font-semibold">Accessibility for All:</span> Making turf facilities accessible across all regions.</li>
                        <li><span className="font-semibold">Fostering Healthy Lifestyles:</span> Encouraging fitness and outdoor activities.</li>
                    </ul>

                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Celebrating Indian Sports Culture</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        India has a rich and diverse sporting culture, from cricket fields to kabaddi grounds, and from football
                        pitches to badminton courts. TurfHub India taps into this passion, offering a platform that allows individuals
                        and teams to come together and experience the thrill of the game. Whether you’re playing in the
                        streets of Delhi or the beaches of Goa, TurfHub is here to support and encourage every player.
                    </p>

                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Have questions or need assistance? Our team is here to help! Get in touch with us:
                    </p>
                    <div className="space-y-4">
                        <p className="text-lg text-gray-600">Email: <a href="mailto:support@turfhubindia.com" className="text-blue-500">support@turfhubindia.com</a></p>
                        <p className="text-lg text-gray-600">Phone: +91 800-123-4567</p>
                        <p className="text-lg text-gray-600">Address: TurfHub India, Sports Complex, New Delhi, India</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
