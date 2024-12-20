import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
    <nav className="w-64 bg-gray-800 text-white h-screen p-4">
        <h2 className="text-2xl font-bold mb-8">QonVene</h2>
        <ul className="space-y-6">
            <li><Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link></li>
            <li><Link to="/create-event" className="hover:text-gray-300">Create Event</Link></li>
            <li><Link to="/my-events" className="hover:text-gray-300">My Events</Link></li>
            <li><Link to="/settings" className="hover:text-gray-300">Settings</Link></li>
        </ul>
    </nav>
);

export default Sidebar;

