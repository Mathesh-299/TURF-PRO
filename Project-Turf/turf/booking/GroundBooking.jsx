import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar'; // Install via npm install react-calendar
import 'react-calendar/dist/Calendar.css';

const GroundBooking = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [slots, setSlots] = useState({ afternoon: false, evening: false, night: false });
    const [bookedDates, setBookedDates] = useState([]);

    // Fetch booked dates and their slots from the backend
    useEffect(() => {
        const fetchBookedDates = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/bookings'); // Update API endpoint if necessary
                setBookedDates(response.data);
            } catch (error) {
                console.error('Error fetching booked dates:', error);
            }
        };
        fetchBookedDates();
    }, []);

    // Check if a date is fully booked
    const isFullyBooked = (date) => {
        const formattedDate = date.toISOString().split('T')[0];
        const booking = bookedDates.find((b) => b.date === formattedDate);
        return booking && booking.slots.afternoon && booking.slots.evening && booking.slots.night;
    };

    // Handle date selection
    const handleDateChange = (date) => {
        setSelectedDate(date);
        const formattedDate = date.toISOString().split('T')[0];
        const booking = bookedDates.find((b) => b.date === formattedDate);
        setSlots(booking ? booking.slots : { afternoon: false, evening: false, night: false });
    };

    // Handle booking a slot
    const handleSlotBooking = async (slot) => {
        const formattedDate = selectedDate.toISOString().split('T')[0];
        try {
            await axios.post('http://localhost:8000/api/bookings', {
                date: formattedDate,
                slot,
            });
            alert(`Successfully booked ${slot} slot on ${formattedDate}`);
            setBookedDates((prev) => {
                const updatedBookings = [...prev];
                const bookingIndex = updatedBookings.findIndex((b) => b.date === formattedDate);
                if (bookingIndex >= 0) {
                    updatedBookings[bookingIndex].slots[slot] = true;
                } else {
                    updatedBookings.push({ date: formattedDate, slots: { [slot]: true } });
                }
                return updatedBookings;
            });
        } catch (error) {
            console.error('Error booking slot:', error);
            alert('Failed to book the slot. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Ground Booking</h1>
            <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                tileDisabled={({ date }) => isFullyBooked(date)}
                className="mb-6"
            />
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Available Slots</h2>
                {Object.keys(slots).map((slot) => (
                    <div key={slot} className="flex items-center justify-between mb-2">
                        <span className="capitalize">{slot}</span>
                        <button
                            disabled={slots[slot]}
                            onClick={() => handleSlotBooking(slot)}
                            className={`px-4 py-2 text-white rounded ${
                                slots[slot] ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
                            }`}
                        >
                            {slots[slot] ? 'Booked' : 'Book Now'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GroundBooking;

