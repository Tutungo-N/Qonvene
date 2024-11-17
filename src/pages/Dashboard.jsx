import React from 'react';
import Sidebar from '../components/Sidebar';
import OrganizerDashboard from '../components/OrganizerDashboard';
import AttendeeDashboard from '../components/AttendeeDashboard';
import { useUserRole } from '../hooks/useUserRole';

const Dashboard = () => {
    const { role } = useUserRole(); // Assuming role is 'organizer' or 'attendee'
    

    return (
        <motion
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            
        >
            <div className="flex">
                <Sidebar />
                <div className="flex-grow p-6">
                    {role === 'organizer' ? <OrganizerDashboard /> : <AttendeeDashboard />}
                </div>
            </div>
        </motion>

    );
};

export default Dashboard;

