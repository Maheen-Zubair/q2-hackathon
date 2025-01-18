import axios from "axios";

const API_URL = "https://677f8e720476123f76a6ff0c.mockapi.io/products";

// User ka type define karte hain
export interface User {
  id: string;
  name: string;
}

// Get Users Function
export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error("Users ko fetch karte waqt error aya:", error);
    throw error;
  }
};

// Create User Function
export const createUser = async (userData: Omit<User, "id">): Promise<User> => {
  try {
    const response = await axios.post<User>(`${API_URL}`, userData);
    return response.data;
  } catch (error) {
    console.error("User ko create karte waqt error aya:", error);
    throw error;
  }
};
