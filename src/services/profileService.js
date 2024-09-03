import { refreshToken } from './refreshToken';

export const fetchProfileData = async () => {
    try {
        const accessToken = localStorage.getItem('access_token');

        if (!accessToken) {
            throw new Error('No access token found. Please log in again.');
        }

        const response = await fetch('https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            }
        });

        if (response.status === 401) {
            // Token might be expired, try refreshing it
            const newToken = await refreshToken();
            if (newToken) {
                return fetchProfileData(); // Retry with new token
            } else {
                throw new Error('Session expired. Please log in again.');
            }
        }

        if (!response.ok) {
            throw new Error('Failed to fetch profile data');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching profile data:', error);
        throw error;
    }
};
