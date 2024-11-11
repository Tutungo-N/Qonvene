import React from 'react';
import Sidebar from '../components/Sidebar';
import OrganizerDashboard from '../components/OrganizerDashboard';
import AttendeeDashboard from '../components/AttendeeDashboard';
import { useUserRole } from '../hooks/useUserRole';

const Dashboard = () => {
    const { role } = useUserRole(); // Assuming role is 'organizer' or 'attendee'
  
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-grow p-6">
                {role === 'organizer' ? <OrganizerDashboard /> : <AttendeeDashboard />}
            </div>
        </div>
    );
};

export default Dashboard;

