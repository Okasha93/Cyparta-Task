import { refreshToken } from './refreshToken';

export const fetchProfileData = async (accessToken) => {
    try {
        const response = await fetch('https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            }
        });

        if (response.status === 401) {
            const newToken = await refreshToken();
            if (newToken) {
                return fetchProfileData(newToken);
            } else {
                throw new Error('Session expired. Please log in again.');
            }
        }

        if (!response.ok) {
            throw new Error('Failed to fetch profile data');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching profile data:', error);
        throw error;
    }
};
