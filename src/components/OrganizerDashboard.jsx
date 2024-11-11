// OrganizerDashboard.jsx
import React from 'react';

const OrganizerDashboard = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-teal-600 text-white p-6">
                <h2 className="text-2xl font-bold mb-6">Organizer Panel</h2>
                <nav className="space-y-4">
                    <a href="#" className="block">Dashboard</a>
                    <a href="#" className="block">Create Event</a>
                    <a href="#" className="block">My Events</a>
                    <a href="#" className="block">Settings</a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600">
                        Create Event
                    </button>
                </div>

                {/* Stats Overview */}
                <section className="grid grid-cols-3 gap-4 mb-8">
                    <div className="p-4 bg-white shadow rounded-md">
                        <p className="text-xl font-bold">Total Registrations</p>
                        <p className="text-3xl mt-2">340</p>
                    </div>
                    <div className="p-4 bg-white shadow rounded-md">
                        <p className="text-xl font-bold">Revenue</p>
                        <p className="text-3xl mt-2">$12,000</p>
                    </div>
                    <div className="p-4 bg-white shadow rounded-md">
                        <p className="text-xl font-bold">Recent Activity</p>
                        <p className="text-3xl mt-2">15</p>
                    </div>
                </section>

                {/* Upcoming Events */}
                <section className="bg-white shadow rounded-md p-6">
                    <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
                    <ul>
                        <li className="mb-4">
                            <p className="font-semibold">Corporate Gala</p>
                            <p className="text-gray-600">5th December</p>
                        </li>
                        <li className="mb-4">
                            <p className="font-semibold">Bitcoin Networking Event</p>
                            <p className="text-gray-600">12th December</p>
                        </li>
                        {/* Add more events as needed */}
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default OrganizerDashboard;

