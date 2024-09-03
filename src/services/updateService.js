import axios from 'axios';
import { refreshToken } from './refreshToken';

export const updateUserProfile = async (formData, token) => {
    try {
        const response = await axios.put(
            'https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/',
            formData,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            }
        );
        return response.data;
    } catch (error) {
        if (error.response && error.response.data.code === 'token_not_valid') {
            const newToken = await refreshToken();
            if (newToken) {
                return updateUserProfile(formData, newToken);
            } else {
                throw new Error('Token refresh failed. Please log in again.');
            }
        }
        console.error('Error updating profile:', error);
        throw error;
    }
};
