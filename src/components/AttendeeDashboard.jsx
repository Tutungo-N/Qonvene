import React, { useState } from 'react';

const AttendeeDashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 p-8">
            <header className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Attendee Dashboard</h1>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search events..."
                    className="px-4 py-2 rounded-md border border-gray-300"
                />
            </header>

            {/* Events Feed */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Recommended Events</h2>
                <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-white shadow rounded-md">
                        <p className="font-semibold">Corporate Gala</p>
                        <p className="text-gray-600">5th December</p>
                    </div>
                    <div className="p-4 bg-white shadow rounded-md">
                        <p className="font-semibold">Bitcoin Networking Event</p>
                        <p className="text-gray-600">12th December</p>
                    </div>
                    {/* Add more events as needed */}
                </div>
            </section>

            {/* My Events */}
            <section className="bg-white shadow rounded-md p-6">
                <h2 className="text-2xl font-bold mb-4">My Events</h2>
                <ul>
                    <li className="mb-4">
                        <p className="font-semibold">Public Celebration</p>
                        <p className="text-gray-600">Registered on 5th November</p>
                    </li>
                    <li className="mb-4">
                        <p className="font-semibold">Virtual Culinary</p>
                        <p className="text-gray-600">Registered on 10th October</p>
                    </li>
                    {/* Add more events as needed */}
                </ul>
            </section>
        </div>
    );
};

export default AttendeeDashboard;

