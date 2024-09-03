export const refreshToken = async () => {
    try {
        const refresh = localStorage.getItem('refresh_token');
        const response = await fetch('https://cyparta-backend-gf7qm.ondigitalocean.app/api/token/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refresh }),
        });

        if (!response.ok) {
            throw new Error('Failed to refresh token');
        }

        const data = await response.json();
        localStorage.setItem('access_token', data.access);
        return data.access;
    } catch (error) {
        console.error('Error refreshing token:', error);
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        throw error;
    }
};
