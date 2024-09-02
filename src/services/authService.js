// services/authService.js

export const login = async (email, password) => {
    try {
      const response = await fetch('https://cyparta-backend-gf7qm.ondigitalocean.app/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
      return data; // Assuming the API returns a token or user data
    } catch (error) {
      console.error('Error:', error);
      throw error; // Re-throw the error so it can be handled in the component
    }
  };
  