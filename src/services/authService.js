import setTokens from "@/utility/setTokens";

export const login = async (email, password) => {
  try {
    const response = await fetch('https://cyparta-backend-gf7qm.ondigitalocean.app/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.status === 200) {
      const data = await response.json();

      // Save tokens to localStorage
      setTokens(data.access, data.refresh);

      return data;
    } else {
      throw new Error('Login failed. Invalid credentials.');
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};