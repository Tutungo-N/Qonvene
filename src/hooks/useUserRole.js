import { useState, useEffect } from 'react';

const useUserRole = () => {
    // Example: Assume 'userRole' comes from a user API or context
    const [userRole, setUserRole] = useState('organizer'); // or 'organizer'

    useEffect(() => {
        // Simulate fetching user role from an API or other source
        // Replace with real logic to fetch user role, if available
        const roleFromApi = localStorage.getItem('userRole') || 'organizer';
        setUserRole(roleFromApi);
    }, []);

    return userRole;
};

export { useUserRole };

